Plan: Export the complete project codebase as a downloadable zip file.

1. Scope the archive
   - Include all tracked project files: `src/`, `public/`, `scripts/`, `index.html`, `package.json`, `tsconfig*.json`, `vite.config.ts`, `tailwind.config.ts`, `README.md`, `components.json`, `eslint.config.js`, `postcss.config.js`, plus any other source/config files.
   - Exclude build artifacts and dependencies: `node_modules/`, `dist/`, `.git/`, and any local `.env` files that may contain secrets.

2. Create the zip
   - Run a `zip` command from the project root `/dev-server` and write the output to `/mnt/documents/scandinavian-clinic-export.zip` so it is immediately visible and downloadable.
   - Verify the archive contains the expected directories and files.

3. Notify the user
   - Provide the file path and a brief summary of what is included and excluded.
   - Include a `<presentation-artifact>` tag so the user can download it directly from the chat UI.

Risks / notes
- This is a one-off artifact export, not a code change.
- The archive will not contain installed `node_modules`; the user can reinstall with `npm install` using the bundled `package.json`.
- Any `.env` files will be deliberately omitted to avoid leaking secrets.
