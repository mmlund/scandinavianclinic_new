

## SEO Implementation Plan

### 1. Add uploaded logo as OG image
- Copy `user-uploads://Logo_now_2025-2.jpg` to `public/og-image.jpg`
- Update `index.html`: replace Lovable placeholder URLs in `og:image` and `twitter:image` with `/og-image.jpg` (absolute URL `https://www.scandinavianclinic.com/og-image.jpg`)
- Remove `twitter:site` referencing `@lovable_dev`

### 2. Add JSON-LD MedicalBusiness structured data to `index.html`
With the approved details plus revisions:
- **Type**: MedicalBusiness
- **Name**: Scandinavian Clinic
- **Description**: Expert orthopedic manual therapy combining Swedish-trained techniques with active rehabilitation in North Vancouver.
- **Address**: Suite 202, 101 West 16th Street, North Vancouver, BC V7M 1T3
- **Phone**: 604-926-4883
- **Email**: info@scandinavianclinic.com
- **URL**: https://www.scandinavianclinic.com
- **Hours**: Mon, Wed, Thu 08:00–17:00
- **Geo**: 49.3200, -123.0724
- **Price Range**: $$
- **Medical Specialty**: Orthopedic, Sports Medicine, **Registered Massage Therapy**
- **Services**: Orthopedic Manual Therapy, **RMT**, **Clinical Massage**, Sports Therapy, Pain Treatment (DNS Training removed)

### 3. Create `public/sitemap.xml`
Include only public pages:
- `/`
- `/rmt-core1`
- `/rmt-core3`
- `/beforebook`

Exclude: `/rmt-core2`, `/backpain`, `/payment`

### 4. Update `public/robots.txt`
- Add `Disallow` rules for `/rmt-core2`, `/backpain`, `/payment`
- Add `Sitemap: https://www.scandinavianclinic.com/sitemap.xml`

### 5. Add per-page meta tags via `usePageMeta` hook
Create `src/hooks/use-page-meta.ts` — a small hook that sets `document.title` and meta description on mount.

Apply to each page:
- **Index**: "Scandinavian Clinic | Orthopedic & Sports Therapy in North Vancouver"
- **RMTCore1**: "RMT & Massage Therapy | Scandinavian Clinic North Vancouver"
- **RMTCore3**: "Sports & Orthopedic Therapy | Scandinavian Clinic North Vancouver"
- **BackPain**: (still gets a title even though blocked from crawling)
- **BeforeBook**: "Book Your Appointment | Scandinavian Clinic"

### 6. Add `loading="lazy"` and video `poster` attributes
- Add `loading="lazy"` to non-hero images in `Services.tsx`, `About.tsx`, etc.
- Add `poster` attributes to `<video>` elements in `Services.tsx`

### Files to create/modify
- **Create**: `public/og-image.jpg`, `public/sitemap.xml`, `src/hooks/use-page-meta.ts`
- **Modify**: `index.html`, `public/robots.txt`, `src/pages/Index.tsx`, `src/pages/RMTCore1.tsx`, `src/pages/RMTCore3.tsx`, `src/pages/BackPain.tsx`, `src/pages/BeforeBook.tsx`, `src/components/Services.tsx`

