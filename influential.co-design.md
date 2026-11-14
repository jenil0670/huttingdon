---
version: alpha
name: Influential
description: A bold, high-contrast influencer-marketing system with electric blue hero surfaces and crisp editorial typography.
colors:
  primary: "#1866FE"
  primary-dark: "#0B2DFF"
  secondary: "#A9DDE0"
  tertiary: "#E0E0E099"
  neutral: "#333333"
  surface: "#FFFFFF"
  on-surface: "#FFFFFF"
  muted-surface: "#BFE7E9"
  border: "#374151"
  text: "#FFFFFF"
  text-muted: "#D7DEFF"
  error: "#E64646"
typography:
  headline-display:
    fontFamily: GT America Extended
    fontSize: 48px
    fontWeight: 500
    lineHeight: 52.8px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: GT America Extended
    fontSize: 38px
    fontWeight: 500
    lineHeight: 41.4px
    letterSpacing: -0.019em
  headline-md:
    fontFamily: GT America Extended
    fontSize: 29px
    fontWeight: 500
    lineHeight: 41.4px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: GT America
    fontSize: 23px
    fontWeight: 300
    lineHeight: 28.8px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: GT America
    fontSize: 18px
    fontWeight: 300
    lineHeight: 25.2px
    letterSpacing: -0.02em
  body-md:
    fontFamily: GT America
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: GT America
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: GT America
    fontSize: 18px
    fontWeight: 400
    lineHeight: 25.2px
    letterSpacing: -0.02em
  label-md:
    fontFamily: GT America
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: GT America
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.08em
  overline:
    fontFamily: GT America Extended
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.12em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 24px
  full: 9999px
spacing:
  xs: 10px
  sm: 20px
  md: 38px
  lg: 100px
  xl: 150px
  gutter: 32px
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "22px 32px"
    height: "59px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "22px 32px"
    height: "59px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "22px 32px"
    height: "59px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "16px 20px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
---

# Influential

## Overview
Influential feels fast, confident, and digitally native, with a distinctly premium marketing-agency tone. The visual language is spacious at the page level but energized by a saturated electric-blue hero and sharp, high-contrast white type. It reads as professional and ambitious rather than playful, with just enough motion-friendly geometry to feel modern and media-savvy.

## Colors
- **Primary (#1866FE):** A vivid electric blue used for the hero panel, major CTA emphasis, and the brand’s most energetic moments. It carries the strongest visual weight and signals confidence, speed, and scale.
- **Secondary (#A9DDE0):** A soft aqua background used for the outer page canvas and supporting areas. It cools the palette and keeps the layout feeling airy despite the saturated hero.
- **Neutral (#333333):** A deep charcoal used for text on light backgrounds and for card-like dark surfaces. It grounds the system and prevents the palette from feeling overly neon.
- **Surface (#FFFFFF):** Clean white used for top-level utility surfaces, cookie controls, and high-contrast UI containers when needed.
- **On-surface (#FFFFFF):** The primary light text color, used across buttons, hero copy, and dark surfaces for maximum legibility.
- **Muted-surface (#BFE7E9):** A pale aqua tint that can support subtle paneling or section backgrounds without breaking the overall cool palette.
- **Border (#374151):** A restrained slate border used for cards and outlined controls where separation is needed without heavy shadow.
- **Text-muted (#D7DEFF):** A softened pale blue-white for secondary copy and low-emphasis text over the blue hero.
- **Error (#E64646):** A clear warning color reserved for validation or destructive states; it should remain sparingly used to preserve the brand’s blue-first identity.

## Typography
The system uses two closely related fonts: GT America Extended for display headlines and GT America for UI copy and body text. Headlines are bold, wide, and compactly tracked, creating a strong editorial presence; the extended face is especially important for the large hero statement and navigation hierarchy. Body text is lighter and more restrained, with 16px–18px sizing and comfortable leading for readability.

Use `headline-display`, `headline-lg`, and `headline-md` for major page statements and section leads; these should feel assertive and slightly condensed in line rhythm. Use `headline-sm` for smaller editorial subheads and `body-lg`/`body-md` for paragraphs and explanatory content. Labels and utility text should rely on `label-sm` or `overline`, often in uppercase or near-uppercase styling with increased letter spacing, matching the small announcement bar and CTA patterns.

## Layout
The layout favors a fixed, generous desktop canvas rather than a tight responsive card grid. Large outer margins, a broad hero container, and substantial spacing between major regions create a sense of prestige and breathing room. The spacing scale is deliberately coarse, with 10px, 20px, 38px, 100px, and 150px steps that support rhythmic, editorial stacking rather than dense UI packing.

Section padding should feel abundant, especially around hero content and full-width panels. Use `gutter` for standard horizontal alignment and reserve the larger spacing tokens for page-level separations, such as between the navigation, hero, and cookie bar. Internal card padding stays modest so the system can remain spacious without becoming visually empty.

## Elevation & Depth
This interface is mostly flat, with hierarchy coming from color contrast and nested tonal layers rather than dramatic shadows. The blue hero block sits above the aqua page background through saturation and scale, while outlined buttons and subtle borders create separation without heaviness. Where depth is needed, use border color and surface contrast first; shadows should remain minimal or absent.

Cards and utility panels should rely on a one-pixel border and a clear tonal distinction, not drop shadows. The result is a polished, modern depth model that feels precise and controlled rather than soft or tactile.

## Shapes
The shape language is rounded but not bubbly. Large interactive elements use full pill radii, giving buttons and controls a polished, approachable finish. Containers and cards are more modestly rounded with `md` and `lg` radii, while the hero panel uses a broad, softened corner treatment that keeps the composition feeling premium and contemporary.

Overall, the system balances sharp editorial geometry with friendly curves. Use pills for CTAs and forms, and reserve smaller radii for structural surfaces.

## Components
Buttons are a defining brand element. `button-primary` and `button-secondary` should both read as pill-shaped outlined CTAs with 1px borders, transparent fill, and 22px 32px padding. They are sized for prominent desktop use at 59px tall and should maintain crisp uppercase or small-caps-like spacing when used in nav or utility contexts. Hover states can be reinforced with `button-primary-hover`, but the interaction should stay restrained rather than flashy.

The `button-link` style is reserved for inline legal, nav, and text-link actions. It should have no background, no border, and an underlined treatment to support clarity in dense text areas like the cookie banner.

Cards should use the `card` token: dark neutral fill, a subtle border, `md` rounding, and minimal internal padding. Avoid heavy shadow-based cards; visual separation should come from color and boundary. Inputs should follow the same pill-like logic as CTAs, with generous padding, clear text color, and low-contrast borders so they feel aligned with the polished marketing aesthetic.

Chips and small tags should be compact, lightweight, and transparent or minimally filled, using `label-sm` typography and full-pill rounding. Utility banners, like the privacy notice and cookie controls, should feel functional and orderly, with distinct button hierarchy but no visual clutter.

## Do's and Don'ts
- Do use the electric blue primary as the strongest attention signal in the interface.
- Do keep typography large, editorial, and tightly tracked for headlines.
- Do preserve generous whitespace and avoid cramming elements into dense grids.
- Do prefer borders and tonal contrast over shadows for separation.
- Don't introduce warm accent colors that fight the cool blue/aqua identity.
- Don't make buttons square or overly ornate; keep them pill-shaped and clean.
- Don't overuse bold weights in body copy; reserve emphasis for headlines and key CTAs.
- Don't add heavy depth effects or glassmorphism that dilute the flat, precise look.