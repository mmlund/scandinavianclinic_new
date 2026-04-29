## Verified findings (no assumptions)

I checked the actual served HTML on the Lovable published site and the React source. Here is what is actually happening.

### 1. Home page title — confirmed in source
`src/pages/Index.tsx` line 14:
```
title: "Registered Massage Therapy in North Vancouver – Clinical Treatment & Root-Cause Recovery | Scandinavian Clinic"
```
Needs `&` → `and`. Simple text edit.

### 2. Every page serving the home title — confirmed and root-caused

I fetched the published Lovable site for several routes:

| URL | Initial HTML `<title>` |
|---|---|
| `https://scandi-glow-reboot.lovable.app/` | Home title |
| `https://scandi-glow-reboot.lovable.app/about-me` | **Home title** |
| `https://scandi-glow-reboot.lovable.app/services` | **Home title** |
| `https://scandi-glow-reboot.lovable.app/first-visit` | **Home title** |
| `https://scandi-glow-reboot.lovable.app/conditions/back-pain-treatment-north-vancouver` | **Home title** |

The HTML at `/about-me` has these tell-tale markers:
- `<html lang="en" data-prerendered="true">` — set only by `scripts/prerender.ts` line 103
- The `<title>`, `<meta description>`, and `<script id="page-jsonld">` are all the **home** page's values
- The embedded gtag tracking URL contains `url=http%3A%2F%2Flocalhost%3A3001%2F` — i.e. when this page was prerendered, `window.location.pathname` was `/`, not `/about-me`

This proves the duplicated title is **not** caused by anything in `src/` — `usePageMeta`, the host-gate in `main.tsx`, the router, and per-page `usePageMeta` calls are all correct. The same titles render correctly on client-side navigation.

The cause is the **external prerender pipeline** (`scripts/prerender.ts` + the user's production build). It is writing the home page's rendered HTML into `dist/about-me/index.html`, `dist/services/index.html`, etc. The smoking gun is the `localhost:3001/` URL captured inside each prerendered file — Puppeteer rendered `/` for every route iteration, then saved that output under each route's directory.

### 3. Is anything in Lovable's code causing it? — No, verified

- `src/hooks/use-page-meta.ts` correctly sets `document.title` per page.
- `src/main.tsx` host-gate only forces `noindex,nofollow` and removes canonicals on non-canonical hosts; it never touches `<title>`.
- React Router config in `src/App.tsx` correctly maps each path to its own component.
- On client navigation in the live preview, titles update correctly per route.

There is no fallback or override in our code that would replace per-page titles. The bad titles only appear in the **initial server-delivered HTML**, which is produced by the user's own prerender step.

### 4. About the prerender pipeline (off-limits per memory)

Per `mem://project/prerender-pipeline`, `scripts/prerender.ts`, the `__PRERENDERING` bypass in `src/main.tsx`, and the related deps/scripts are owned by you and must not be modified by Lovable. So I will **not** edit `scripts/prerender.ts`. The fix for the duplicate-title problem belongs in your external pipeline.

Most likely cause inside `scripts/prerender.ts` (for your reference, not for me to change): Puppeteer reuses one `page` instance across iterations and `page.goto(url, { waitUntil: 'networkidle0' })` may be resolving against a cached navigation, or `waitForSelector('link[rel="canonical"]')` is resolving on a stale canonical from the previous iteration before React re-runs `usePageMeta` for the new path. Common fixes: create a fresh page per route, add `await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.remove())` before navigation, or wait for a route-specific marker (e.g. `document.title` to change away from the previous value, or an `h1` text match). Again — you, not me, to apply.

---

## Plan (what I will change in Lovable)

### Single change

**`src/pages/Index.tsx`** — replace `&` with `and` in the home title:

Before:
```
"Registered Massage Therapy in North Vancouver – Clinical Treatment & Root-Cause Recovery | Scandinavian Clinic"
```
After:
```
"Registered Massage Therapy in North Vancouver – Clinical Treatment and Root-Cause Recovery | Scandinavian Clinic"
```

### What I will NOT change

- `scripts/prerender.ts` — off-limits.
- The `__PRERENDERING` bypass in `src/main.tsx` — off-limits.
- `usePageMeta` / per-page titles — verified correct, no fallback or override exists.

---

## Action required from you

The duplicate-title problem on the published site can only be fixed in your prerender pipeline. The Lovable-side React code already sets the correct per-page title; it's the prerendered HTML files that are wrong. After you fix the pipeline and redeploy, the per-page titles I previously listed will be served correctly without further code changes here.

If you'd like, I can also draft a short technical note for your prerender-side fix (without touching the file) — just say the word.