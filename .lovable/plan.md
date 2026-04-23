

## Goal
Ensure every page on the site emits a `<link rel="canonical">` tag in `<head>` that:
- Always uses the apex domain `https://scandinavianclinic.com` (no `www`)
- Reflects the **exact current path** of the page (no forced trailing slashes, no hard-coded values)

## Current Issues Found
1. `index.html` hard-codes `https://www.scandinavianclinic.com/` (wrong host).
2. Several pages pass `https://www.scandinavianclinic.com/...` (wrong host): `BackPain`, `Hours`, `Testimonials`, `RMTCore1`.
3. Inconsistent trailing slashes across pages (`/about-me/` vs `/hours`).
4. `usePageMeta` only updates an existing canonical tag — if `index.html`'s tag were removed or the URL changed, nothing creates/maintains it. Pages without a `canonical` arg leave the stale `index.html` value in place.
5. Pages missing `usePageMeta` calls (e.g. `NotFound`, `Contact`, `Services`, `ConditionsTreated`, `Payment`) inherit the stale homepage canonical.

## Plan

### 1. Fix `index.html`
Update the static canonical and Open Graph URL to the apex domain:
```html
<link rel="canonical" href="https://scandinavianclinic.com/" />
<meta property="og:url" content="https://scandinavianclinic.com/" />
```
(Also update `og:image` / `twitter:image` to the apex host for consistency.)

### 2. Make `usePageMeta` self-healing and path-aware
Refactor `src/hooks/use-page-meta.ts` so canonical handling is automatic:
- Compute the canonical from the **current `window.location.pathname`** by default: `https://scandinavianclinic.com${pathname}`.
- Allow an explicit `canonical` override only when needed.
- **Create** the `<link rel="canonical">` tag if it doesn't exist; otherwise update it.
- Normalize: strip `www.`, force `https://scandinavianclinic.com`, preserve the exact path as-is (no added/removed trailing slash beyond what React Router uses).
- Mirror the same value into `og:url`.

### 3. Add a global canonical updater for routes without `usePageMeta`
In `src/App.tsx`, inside `TrackingInit` (or a new tiny `CanonicalSync` component), on every `location.pathname` change, set the canonical tag to `https://scandinavianclinic.com${pathname}`. This guarantees every route — including `NotFound`, `Contact`, `Services`, `ConditionsTreated`, `Payment`, etc. — gets a correct canonical even if the page component doesn't call `usePageMeta`. Pages that DO call `usePageMeta` will simply overwrite with the same value (or an explicit override).

### 4. Clean up per-page canonicals
Remove hard-coded `www.` and inconsistent paths from page-level `usePageMeta` calls. Preferred approach: **delete the `canonical` field entirely** from each page so the global logic derives it from the current path. Keep an explicit `canonical` only if a page intentionally needs to point elsewhere (none currently do).

Affected files:
- `src/pages/Index.tsx`, `RMT.tsx`, `DNS.tsx`, `AboutMe.tsx`, `Education.tsx`, `FirstVisit.tsx`, `Facilities.tsx`, `Booking.tsx`, `BackPain.tsx`, `Hours.tsx`, `Testimonials.tsx`, `RMTCore1.tsx`, `RMTCore3.tsx`, `Draft.tsx`, plus any others using `usePageMeta`.

### 5. Verify
After changes, every route should render:
```html
<link rel="canonical" href="https://scandinavianclinic.com<current-path>" />
```
with no `www`, no duplicate tags, and correctly updated on client-side navigation.

## Files to Edit
- `index.html` — fix static canonical / og:url to apex domain
- `src/hooks/use-page-meta.ts` — auto-derive canonical from path, create tag if missing, strip `www`
- `src/App.tsx` — add per-route canonical sync inside `TrackingInit`
- All `src/pages/*.tsx` files using `usePageMeta` — remove hard-coded `canonical` values

