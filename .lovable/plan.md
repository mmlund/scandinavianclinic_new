

## Goal
Create a new SEO-optimized landing page at `/conditions/back-pain-treatment-north-vancouver` using the provided clinical copy, attach proper schema markup, and include the URL in the sitemap.

## What Will Be Built

### 1. New page: `src/pages/BackPainTreatmentNorthVancouver.tsx`
A clean, conversion-focused landing page following the clinic's Scandinavian visual style. Sections:

- **Hero** — H1: "Back Pain Treatment in North Vancouver" (only H1 on page), intro paragraph, primary CTA → `/booking` (per booking-flow rule, this routes through the policy gate).
- **Your Back Pain** — narrative intro about how back pain disrupts daily life (shoes, meetings, North Shore hikes).
- **Understanding Back Pain** — H2 + H3 "Why Your Back Hurts — and Why It Keeps Coming Back", symptoms list, when-to-seek-treatment callout. Includes placeholder internal link to `/conditions/sciatica-treatment-north-vancouver` (inactive — rendered as a styled `<Link>` that currently routes to `/conditions-treated` so it doesn't 404, with a TODO comment for the future sciatica page).
- **How We Treat Back Pain** — Cards/blocks for: Spinal & Joint Mobilization (low velocity), Deep Core Reactivation through DNS (links to `/d-n-s`), Soft Tissue & Fascia Work, Active Rehabilitation.
- **What to Expect** — Path from pain to function (60-min sessions, 3–6 sessions typical, home-practice emphasis).
- **Why Scandinavian Clinic** — Bullet list with link to `/d-n-s` from the DNS bullet.
- **Schedule Your Visit** — CTA section → `/booking`.
- **Contact & Location** — Reuses existing `<Contact />` component (already has address, phone, hours).
- Standard `<Navigation />` and `<Footer />`.

Visual treatment: matches existing clinical pages (`BackPain.tsx`, `RMTCore3.tsx`) — soft palette, no spinal-manipulation imagery, prefer existing video assets (e.g. `dnsVideo`, `backpainVideo`) where appropriate. No spa/reassurance language.

### 2. SEO meta via `usePageMeta`
- **Title:** `Back Pain Treatment in North Vancouver | Scandinavian Clinic`
- **Description:** `Assessment-based back pain treatment in North Vancouver. Swedish-trained RMT specializing in spinal mobilization, core stabilization, DNS, and lasting pain relief. Most insurance accepted.`
- **Canonical:** auto-derived as `https://scandinavianclinic.com/conditions/back-pain-treatment-north-vancouver` (handled by the existing global canonical sync — no override needed).

### 3. JSON-LD schema (passed via `usePageMeta`'s `jsonLd`)
Two combined schemas:

- **MedicalBusiness** — name, address (Suite 202–101 West 16th Street, North Vancouver, BC V7M 1T3), phone (604) 926-4883, email, opening hours (Mon/Wed/Thu 08:00–17:00), URL, areaServed: North Vancouver.
- **MedicalWebPage** — `name`, `url`, `description`, `about` → `MedicalCondition` "Back Pain", `audience` → adults seeking back pain treatment, `lastReviewed` set to today.

### 4. Routing
Add to `src/App.tsx`:
```tsx
import BackPainTreatmentNorthVancouver from "./pages/BackPainTreatmentNorthVancouver";
...
<Route path="/conditions/back-pain-treatment-north-vancouver" element={<BackPainTreatmentNorthVancouver />} />
```
Placed above the catch-all `*` route.

### 5. Sitemap update
Edit `scripts/sitemap-config.ts`:
- Add `{ path: "/conditions/back-pain-treatment-north-vancouver", priority: 0.9, changefreq: "monthly" }` under "Primary service / treatment pages".

Edit `scripts/generate-sitemap.ts`:
- Add the new route to the `map` so its `lastmod` reflects the new page file's mtime:
  ```ts
  "/conditions/back-pain-treatment-north-vancouver": ["src/pages/BackPainTreatmentNorthVancouver.tsx"],
  ```

Regenerate `public/sitemap.xml` so it includes the new `<url>` block (apex domain, today's lastmod, 0.9 priority, monthly changefreq).

### 6. Files Edited / Created
- **Created:** `src/pages/BackPainTreatmentNorthVancouver.tsx`
- **Edited:** `src/App.tsx` (route registration)
- **Edited:** `scripts/sitemap-config.ts` (new sitemap entry)
- **Edited:** `scripts/generate-sitemap.ts` (lastmod mapping)
- **Regenerated:** `public/sitemap.xml`

### Notes
- The provided sciatica link (`/conditions/sciatica-treatment-north-vancouver`) does not yet exist — it will render as a styled link pointing to `/conditions-treated` for now, with a code comment marking it as a placeholder for the future sciatica page so it doesn't 404.
- Existing `/backpain` page is unchanged and remains excluded from the sitemap (per existing crawling policy).

