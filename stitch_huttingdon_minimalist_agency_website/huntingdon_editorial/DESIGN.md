---
name: Huntingdon Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0d0d0d'
  on-primary-container: '#7c7a7a'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c3c0ff'
  on-tertiary: '#1d00a5'
  tertiary-container: '#050040'
  on-tertiary-container: '#6b65ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3323cc'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in the concept of **Quiet Luxury**. It transitions the brand from a standard digital marketing aesthetic into the realm of high-end editorial and fashion. The target audience consists of premium brands and elite influencers who value discretion, prestige, and meticulous craft.

The visual style is a blend of **Minimalism** and **High-Contrast Typography**. It prioritizes heavy whitespace to allow high-quality influencer photography to breathe, acting as a curated gallery rather than a generic platform. Layouts are intentional and spacious, utilizing a sharp, grid-based structure that evokes the feel of a luxury print magazine.

Key emotional responses:
- **Exclusivity:** Through restrained color use and ample negative space.
- **Authority:** Through high-contrast, historical serif typography.
- **Modernity:** Through clean, technical sans-serif body text and razor-sharp corners.

## Colors

This design system utilizes a "Dark Mode First" philosophy to establish a sophisticated, high-end environment. 

- **Primary (#0D0D0D):** A deep, rich charcoal used for backgrounds to create a sense of infinite depth.
- **Secondary (#F5F5F5):** An off-white used for primary text and high-contrast UI elements, ensuring readability without the harshness of pure white.
- **Tertiary (#4F46E5):** An 'Electric Indigo' used sparingly for critical calls to action and interactive states, providing a sharp, digital edge to the analog-inspired palette.
- **Neutral (#262626):** A softer charcoal for card surfaces, borders, and secondary text to create subtle hierarchy.
- **Refined Gold (#C5A059):** An optional accent used for luxury signifiers, such as premium badges or decorative rules.

## Typography

Typography is the cornerstone of this design system. It relies on the tension between the classic, high-contrast strokes of **Bodoni Moda** and the technical, geometric clarity of **Hanken Grotesk**.

- **Headlines:** Always set in Bodoni Moda. For large display sizes, use tight letter spacing to emphasize the dramatic weight contrast of the letterforms.
- **Body:** Hanken Grotesk provides a neutral, highly legible counterpoint. It should be set with generous line height to maintain an editorial feel.
- **Labels:** Use uppercase Hanken Grotesk with increased letter spacing for small metadata, navigation items, and section labels to maintain a structured, professional look.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy within a maximum container width of 1440px, ensuring that content remains centered and curated on ultra-wide displays. 

- **Grid:** A 12-column system is used for desktop. For a truly editorial feel, content often spans 6 or 8 columns, offset to create asymmetrical interest.
- **Rhythm:** A vertical rhythm of 128px between major sections creates the "Quiet Luxury" spaciousness required to highlight brand imagery.
- **Mobile:** On mobile devices, margins reduce to 24px, and the layout collapses to a single-column stack. Typography scales down aggressively to maintain the high-contrast aesthetic without overflowing the viewport.

## Elevation & Depth

In keeping with the minimalist and sharp-edged direction, this design system avoids traditional drop shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Layers:** Depth is communicated by shifting background colors. The base layer is `#0D0D0D`, while elevated surfaces (like cards) use `#1A1A1A` or `#262626`.
- **Borders:** Subtle, 1px solid borders in `#262626` are used to define boundaries without adding visual clutter.
- **Glassmorphism:** Occasionally, a subtle backdrop blur (12px) with a 10% opacity white fill may be used for navigation bars to maintain context of the content scrolling beneath while keeping a clean, premium interface.

## Shapes

The shape language is strictly **Sharp (0px radius)**. Every element—from buttons and input fields to large-scale imagery and card containers—must feature 90-degree corners. 

This decision reinforces the professional, architectural nature of the brand and differentiates it from the "bubbly" or "soft" aesthetics common in social media platforms. It evokes the precision of high-end fashion branding and luxury editorial design.

## Components

### Buttons
- **Primary:** Sharp-edged, solid `#F5F5F5` background with `#0D0D0D` text. Hover state shifts to `#C5A059` (Gold).
- **Secondary/Outline:** 1px border of `#F5F5F5` with transparent background.
- **CTA:** Use the Electric Indigo (`#4F46E5`) for high-conversion actions like "Book a Consultation."

### Input Fields
- Transparent backgrounds with a 1px bottom border only (`#4F4F4F`). 
- Labels use the `label-caps` typography style, positioned above the field.
- Focused state changes the bottom border to `#F5F5F5`.

### Cards
- Use for "Influencer Profiles" or "Case Studies."
- No shadows. Use a subtle background change (`#1A1A1A`) and sharp 1px borders.
- Imagery within cards should fill the container entirely to maintain the architectural feel.

### Lists & Navigation
- Navigation items are set in `label-caps`. 
- Active states are indicated by a simple 1px underline or a color shift to the accent indigo.
- Lists use generous vertical padding (24px+) to prevent the interface from feeling crowded.

### Chips & Tags
- Rectangular with 0px radius.
- Background: `#262626`, Text: `#F5F5F5`.
- Used for categories like "Lifestyle," "Beauty," or "Tech" in portfolio sections.