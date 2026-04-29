import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { extname, join, resolve } from 'path';
import puppeteer from 'puppeteer';
import { SITEMAP_ROUTES } from './sitemap-config';
import fs from 'fs/promises';

const PORT = 3001;
const DIST_DIR = resolve(process.cwd(), 'dist');
const EXCLUDED_ROUTES = ['/payment', '/draft', '/rmt-core2', '/booking', '/404'];

const routesToRender = SITEMAP_ROUTES
  .map(r => r.path)
  .filter(route => !EXCLUDED_ROUTES.includes(route));

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.svg': 'image/svg+xml',
};

let originalIndexHtml: Buffer | string;

// Simple static file server with SPA fallback
const server = createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url || '/', `http://localhost:${PORT}`);
    let reqPath = parsedUrl.pathname;
    const ext = String(extname(reqPath)).toLowerCase();
    
    // Always serve the original SPA shell for routes (no extension) or HTML requests.
    // This prevents Puppeteer from loading a previously prerendered HTML file
    // (like the overwritten home page), which would cause waitForSelector 
    // to resolve instantly before React can render the correct route's title.
    if (!ext || ext === '.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(originalIndexHtml);
      return;
    }

    let filePath = join(DIST_DIR, reqPath);
    let fileStat = await stat(filePath).catch(() => null);
    
    if (!fileStat || !fileStat.isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const content = await readFile(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Server error');
  }
});

async function main() {
  console.log('Reading original SPA shell...');
  originalIndexHtml = await readFile(join(DIST_DIR, 'index.html'));

  console.log(`Starting local server on port ${PORT}...`);
  await new Promise<void>((resolve) => {
    server.listen(PORT, () => resolve());
  });

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // Required for Render
  });

  try {
    const page = await browser.newPage();
    
    // Inject flag so React app knows it's being prerendered (bypasses main.tsx host checks)
    await page.evaluateOnNewDocument(() => {
      (window as any).__PRERENDERING = true;
    });

    // Capture browser console logs to debug React mounting issues
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));
    page.on('requestfailed', request => {
      console.error(`BROWSER NETWORK ERROR: ${request.url()} - ${request.failure()?.errorText}`);
    });

    for (const route of routesToRender) {
      console.log(`Prerendering ${route}...`);
      const url = `http://localhost:${PORT}${route}`;
      
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Wait for usePageMeta to inject canonical link
        await page.waitForSelector('link[rel="canonical"]', { timeout: 10000 });
        
        // Grab the fully rendered HTML and add data-prerendered
        let html = await page.evaluate(() => {
          document.documentElement.setAttribute('data-prerendered', 'true');
          return document.documentElement.outerHTML;
        });

        html = `<!DOCTYPE html>\n${html}`;

        // Create directory structure if it doesn't exist
        const routePath = route === '/' ? '' : route;
        const targetDir = join(DIST_DIR, routePath);
        await fs.mkdir(targetDir, { recursive: true });
        
        // Write the index.html file
        await fs.writeFile(join(targetDir, 'index.html'), html);
        
        console.log(`  ✓ Success: ${route}`);
      } catch (err: any) {
        console.error(`  ✗ Failed: ${route}`, err.message);
      }
    }
  } finally {
    console.log('Closing browser and server...');
    await browser.close();
    server.close();
  }
}

main().catch(err => {
  console.error('Prerender process failed:', err);
  process.exit(1);
});
