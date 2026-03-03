

## Plan: Add "Markenbotschafterin 075" Section to B2B and B2C Pages

### What to build
A new section below the "Philosophie" box in both the B2B (`AboutSection.tsx`) and B2C (`PrivatePage.tsx`) about areas, featuring Difan Xu as brand ambassador with her photo, text, and links to her website and Instagram.

### Steps

1. **Copy the uploaded image** to `public/lovable-uploads/` for use on both pages.

2. **Create a shared `BrandAmbassador` component** (`src/components/BrandAmbassador.tsx`) containing:
   - A styled card/box matching the dark background aesthetic of the About sections
   - A "Markenbotschafterin 075" label/badge (similar style to the "Unsere Philosophie" pill)
   - Two-column layout: photo on one side, text + links on the other (stacking on mobile)
   - The uploaded photo of Difan with rounded styling
   - The full ambassador text (4 paragraphs)
   - Links to [075 Website](https://075-wein.de) and [Instagram](https://www.instagram.com/075_weinbar_u_handel/?hl=de) opening in new tabs, styled with external link icons
   - Framer Motion fade-in animation consistent with existing patterns

3. **Add the component to B2B page** (`src/components/business/AboutSection.tsx`): Insert `<BrandAmbassador />` after the Philosophie `motion.div` box (after line 92), inside the existing container.

4. **Add the component to B2C page** (`src/pages/PrivatePage.tsx`): Insert `<BrandAmbassador />` after the Philosophie box (after line 227), inside the existing About section container.

### Technical details
- Shared component avoids code duplication across both pages
- Uses existing motion variants (`fadeIn`) from `@/lib/motion`
- Dark background styling with `bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl` to match the Philosophie box
- Image imported from public directory
- External links use `target="_blank" rel="noopener noreferrer"`

