# Design System Strategy: West Sacramento Futbol Club

## 1. Overview & Creative North Star
### Creative North Star: "The Modern Pitch"
The transition from "Soccer Club" to "Futbol Club" demands a visual shift from a generic youth sports organization to a high-performance, elite athletic academy. This design system moves away from the rigid, boxed-in layouts of the past toward "The Modern Pitch"—a digital experience defined by expansive whitespace, aggressive editorial typography, and high-velocity motion.

By utilizing **intentional asymmetry** and **tonal layering**, we break the traditional "sports template" look. We treat the interface not as a series of containers, but as a fluid field of play where content is prioritized through depth and scale rather than lines and borders.

---

## 2. Colors & Signature Textures
The palette modernizes the club’s legacy red and blue into high-chroma, sophisticated tones that feel energetic yet professional.

### The Palette
- **Primary (`#ba0c00`):** The club's pulse. Used for high-impact actions and hero moments.
- **Secondary (`#2e5ab5`):** The stabilizing force. Used for supporting information and secondary CTAs.
- **Surface & Background (`#fcf9f8`):** An "off-white" paper tone that feels premium and reduces eye strain compared to pure white.

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are strictly prohibited** for sectioning content. Boundaries are created through:
- **Background Shifts:** Placing a `surface-container-low` component against a `surface` background.
- **Whitespace:** Using the spacing scale to create clear mental models of grouping.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use `surface-container-lowest` to `surface-container-highest` to define nesting. An inner card should always sit one "step" above its parent background to create organic depth without relying on antiquated drop shadows.

### The "Glass & Gradient" Rule
To add visual "soul":
- **Signature Gradients:** Use a subtle linear transition from `primary` to `primary_container` for hero buttons and primary CTA backgrounds.
- **Glassmorphism:** For mobile navigation overlays or floating action buttons, use `surface` with a 70% opacity and a `24px` backdrop-blur. This keeps the user connected to the "pitch" (the content) behind the UI.

---

## 3. Typography
We move beyond standard system fonts to a high-contrast pairing that balances athletic aggression with modern readability.

### Type Pairing
- **Display & Headlines (Space Grotesk):** A tech-forward, wide-aperture typeface. Use this for scores, hero titles, and big "Futbol Club" announcements. It conveys precision and modern speed.
- **Body & Titles (Inter):** A clean, high-legibility sans-serif. Used for all functional data, news articles, and player bios.

### Hierarchy for Impact
- **Display-LG (3.5rem):** Reserved for impact statements (e.g., "JOIN THE ELITE").
- **Headline-MD (1.75rem):** Used for section titles.
- **Label-MD (0.75rem):** Always uppercase with `0.05em` letter spacing for a technical, data-driven look on player stats or match times.

---

## 4. Elevation & Depth
In "The Modern Pitch," we avoid heavy shadows that feel "muddy."

- **The Layering Principle:** Stack `surface-container-lowest` cards on `surface-container-low` sections. This creates a "soft lift" that feels like high-end stationery.
- **Ambient Shadows:** When an element must float (e.g., a bottom navigation bar), use a shadow with a 20% spread and 4% opacity. The color should be a tinted version of `on-surface` (dark red-grey) rather than black.
- **The "Ghost Border":** If a separation is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Use semi-transparent `surface_variant` layers for mobile overlays to maintain a sense of environmental light and space.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with a subtle gradient to `primary_container`. Roundedness: `md (0.375rem)`. Text is `label-md` uppercase.
- **Secondary:** `surface_container_highest` background with `on_surface` text. No border.

### Cards & Lists
- **The "No Divider" Mandate:** Lists must never use horizontal lines. Separate list items using `16px` of vertical whitespace and a slight background color toggle on hover/active states.
- **Athletic Cards:** Cards for player profiles or upcoming matches should use `surface-container-lowest` with a `xl (0.75rem)` corner radius for a friendly but modern feel.

### Input Fields
- **Modern Ghost Inputs:** Background should be `surface-container-high`. No border. On focus, transition the background to `surface-container-highest` and add a `primary` 2px bottom-only highlight.

### Chips (Match Tags)
- Use `secondary_container` for "Live" or "Upcoming" tags. Type should be `label-sm` for a sleek, compact look.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use asymmetrical layouts. Let an image bleed off the left side of the screen while text is indented.
- **Do** prioritize "Breathing Room." If you think there is enough whitespace, add 20% more.
- **Do** use `primary` sparingly. It is a high-energy "spark" color, not a background fill for large areas.

### Don’t:
- **Don't** use 100% opaque black. Always use `on_surface` (`#1b1b1b`) to maintain a premium, editorial feel.
- **Don't** use standard "Drop Shadows." They make the UI look like a 2010s mobile app. Use tonal shifts and ambient blurs.
- **Don't** use dividers. If your content is crashing into each other, your spacing scale is too small; increase the gap rather than adding a line.