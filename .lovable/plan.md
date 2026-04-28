## Goal

Make sure I (and every future Lovable session) reliably remember that your prerender pipeline is off-limits, without you having to re-explain it each time.

## How Lovable's memory works (short version)

- Project memory lives at `mem://`. The index file (`mem://index.md`) is **always loaded into context** at the start of every session.
- "Core" rules in the index are one-liners applied to every action.
- Detailed rules live in linked memory files and are read on demand when relevant (e.g., when I'm about to touch `package.json` or `src/main.tsx`).
- Memory survives across sessions and across chat history summarization — it's the right place for durable rules like this.

## What I'll save

**1. Add a Core line to `mem://index.md`** (always in context):

> Off-limits: Do NOT edit `scripts/prerender.ts`, the `__PRERENDERING` bypass in `src/main.tsx`, or the `prerender`/`build:prod` scripts and `puppeteer`/`serve`/`tsx` deps in package.json. See Prerender Pipeline memory.

**2. Create `mem://project/prerender-pipeline.md`** (constraint type) with the full detail:

- **Off-limits files**: `scripts/prerender.ts`; the `(window as any).__PRERENDERING` check inside `isCanonicalHost` in `src/main.tsx` (rest of `main.tsx` remains editable, but that bypass must be preserved).
- **Off-limits package.json items**: devDependencies `puppeteer`, `serve`, `tsx`; scripts `prerender` and `build:prod`.
- **Safe**: standard `build` script (`vite build`) is clean and used for previews.
- **Why**: the prerender pipeline runs only in your separate production deploy and is decoupled from Lovable's preview build; touching these would break your prod pipeline.
- **How to apply**: before any edit to `src/main.tsx`, `package.json`, or files under `scripts/`, verify the change doesn't touch the protected items.

**3. Link it from the index** under `## Memories` so future sessions can find it by topic.

## What this guarantees

- Every new session sees the Core off-limits line immediately — no need to re-explain.
- When I'm about to edit `package.json`, `main.tsx`, or anything in `scripts/`, the linked detailed memory tells me exactly what to leave alone.
- If you later add more protected files/scripts, just tell me and I'll append them to the same memory file.

## Extra suggestion (optional)

If you want a belt-and-suspenders signal that's visible in the repo itself (not just memory), I can also add a short `scripts/README.md` noting "this directory is owned by the user's production pipeline; Lovable should not modify." Memory alone is sufficient, but a repo-level note helps if you ever onboard another tool or collaborator. Let me know if you want this included.

## Next step

Approve this plan and I'll write both memory files in one go. No app code changes.
