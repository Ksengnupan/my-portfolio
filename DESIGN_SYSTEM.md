# Seng Nu Pan's Portfolio Design System

## Overview
A modern, professional design system for an AI Engineer portfolio. Clean, accessible, and minimal aesthetic using a subtle white and light blue palette with professional neutral grays. No bold accent colors — the design lets the content speak.

---

## Design Tokens

### Color Palette

#### Primary Colors (Subtle Blue Spectrum)
| Color | Hex | Use Case | CSS Variable |
|-------|-----|----------|--------------|
| **Blue 500** | `#3B96D4` | Primary CTAs, links, active states | `--blue-500` |
| **Blue 400** | `#5BAEE8` | Hover states, highlights | `--blue-400` |
| **Blue 300** | `#7CC0F5` | Decorative accents, dots | `--blue-300` |
| **Blue 200** | `#BADDFF` | Hover borders, subtle focus | `--blue-200` |
| **Blue 100** | `#E0EFFF` | Light backgrounds, badges | `--blue-100` |
| **Blue 50** | `#F0F7FF` | Card tints, icon backgrounds | `--blue-50` |

#### Neutral Colors
| Color | Hex | Use Case | CSS Variable |
|-------|-----|----------|--------------|
| **White** | `#FFFFFF` | Primary background | `--white` |
| **Off White** | `#F8FAFC` | Alternating section backgrounds | `--off-white` |
| **Gray 100** | `#F1F5F9` | Skill badges, subtle backgrounds | `--gray-100` |
| **Gray 200** | `#E2E8F0` | Borders, dividers | `--gray-200` |
| **Gray 400** | `#94A3B8` | Placeholder text, dates | `--gray-400` |
| **Gray 500** | `#64748B` | Secondary text | `--gray-500` |
| **Gray 700** | `#334155` | Body text | `--gray-700` |
| **Gray 900** | `#0F172A` | Headings, strong text | `--gray-900` |

#### Semantic Colors
| Purpose | Color | Hex |
|---------|-------|-----|
| Success | Green | `#4CAF50` |
| Error | Red | `#F44336` |
| Warning | Orange | `#FFC107` |
| Info | Light Blue | `#87CEEB` |

### Typography

#### Font Stack
```css
/* Headlines & Strong Text */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Body & Supporting Text */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

#### Type Scale
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| **H1 - Page Title** | 48px | 700 | 1.2 | -0.5px |
| **H2 - Section Title** | 36px | 700 | 1.3 | -0.3px |
| **H3 - Subsection** | 28px | 600 | 1.4 | 0 |
| **H4 - Component Title** | 20px | 600 | 1.5 | 0 |
| **Body - Large** | 18px | 400 | 1.6 | 0 |
| **Body - Regular** | 16px | 400 | 1.6 | 0 |
| **Body - Small** | 14px | 400 | 1.5 | 0 |
| **Caption** | 12px | 500 | 1.4 | 0.5px |
| **Code/Mono** | 14px | 400 | 1.5 | 0 |

#### Font Weights
- **700**: Bold (headings, emphasis)
- **600**: Semibold (subheadings, labels)
- **500**: Medium (strong body text)
- **400**: Regular (body text)

### Spacing Scale

A consistent 8px base unit for all spacing:

| Size | Value | Use Case |
|------|-------|----------|
| **xs** | 4px | Micro spacing within components |
| **sm** | 8px | Padding, margins in compact areas |
| **md** | 16px | Standard component padding/margin |
| **lg** | 24px | Section spacing, card gaps |
| **xl** | 32px | Major section spacing |
| **2xl** | 48px | Large section breaks |
| **3xl** | 64px | Page-level spacing |

### Borders & Corners

| Property | Value | Use Case |
|----------|-------|----------|
| **Border Radius - Sm** | 4px | Subtle rounding on inputs |
| **Border Radius - Md** | 8px | Standard component rounding |
| **Border Radius - Lg** | 12px | Cards, larger components |
| **Border Radius - Full** | 50% | Avatars, badges |
| **Border Width** | 1px | Default borders |
| **Border Width - Heavy** | 2px | Emphasis borders |

### Shadows & Elevation

| Level | Box Shadow | Use Case |
|-------|-----------|----------|
| **Sm** | `0 1px 2px rgba(0,0,0,0.05)` | Subtle depth |
| **Md** | `0 4px 6px rgba(0,0,0,0.1)` | Cards, hover states |
| **Lg** | `0 10px 15px rgba(0,0,0,0.1)` | Modal focus |
| **Xl** | `0 20px 25px rgba(0,0,0,0.15)` | High elevation |

---

## Components

### 1. Button

#### Variants
- **Primary**: Yellow background, black text → Main CTAs (View Project, Download Resume)
- **Secondary**: Light blue background, black text → Supporting actions
- **Ghost**: Transparent, black text, yellow border → Links, subtle actions
- **Dark**: Black background, yellow text → High contrast alternative

#### States
| State | Styling |
|-------|---------|
| Default | Full opacity, cursor pointer |
| Hover | Slightly darker shade, lift shadow |
| Active | Darker color, inner shadow |
| Disabled | 50% opacity, cursor not-allowed |

#### Padding
- **Small**: 8px 16px (for badges, small CTAs)
- **Medium**: 12px 24px (standard buttons)
- **Large**: 16px 32px (hero CTAs)

### 2. Card

Used for projects, skills, testimonials, experience blocks.

#### Properties
- Background: White
- Border: 1px light gray
- Border Radius: 8px
- Padding: 24px
- Box Shadow: Medium
- Hover: Lift to large shadow, yellow border on top

#### Internal Spacing
- Title to description: 12px
- Description to metadata: 16px
- Metadata items: 8px apart

### 3. Navigation Bar

#### Structure
- Background: White
- Height: 60px
- Sticky: Yes (stays at top on scroll)
- Shadow: Small (subtle separation)

#### Items
- Logo/Name: H4 weight, black text
- Links: Body regular, hover → yellow underline
- CTA Button: Primary variant
- Spacing between items: 24px

### 4. Hero Section

#### Layout
- Full width
- Min height: 500px
- Background: White with light gray accent bar on left
- Content padding: 64px 48px

#### Text Hierarchy
- Main headline: H1 (yellow accent on key word)
- Subheading: H3, dark gray
- CTA: Primary button below text
- Spacing: 24px between headline and subheading, 32px to CTA

### 5. Project Card

#### Components
- Image/thumbnail (16:9 aspect)
- Project title: H4
- Description: Body small (2-3 lines max)
- Tags: Small badge components
- CTA button: Ghost variant

#### Hover Effect
- Image: 5% zoom, slight blur overlay
- Card: Yellow top border appears
- Text: Light blue color on title

### 6. Skill Badge

#### Properties
- Background: Light blue or yellow (alternating)
- Text: Black
- Padding: 6px 12px
- Border radius: Full (50%)
- Font: Caption weight, semibold
- Max width: Fit content

### 7. Timeline/Experience

#### Elements
- Vertical line: Gray, 2px
- Milestone circles: 12px, yellow or blue (alternating)
- Content boxes: Connected to circles
- Date label: Caption text, gray
- Title: H4
- Description: Body small

---

## Patterns

### Layout Grid
- Desktop: Max width 1200px, centered with 48px side padding
- Tablet: Max width 100%, 24px side padding
- Mobile: 100%, 16px side padding
- Columns: 12-column grid for flexibility

### Navigation Pattern
1. Sticky header with logo and main nav links
2. Links: Home, About, Projects, Skills, Contact
3. Active link: Yellow underline
4. Mobile: Hamburger menu, slide-out nav

### Hero Pattern
- Large headline with accent color
- Subheading with supporting text
- Primary CTA button
- Optional: Hero image or animated background

### Project Showcase Pattern
- Title section: "Featured Projects" or "My Work"
- Grid layout: 2-3 cards per row (responsive)
- Filter/category buttons (optional)
- Each card: Image, title, description, tags, link
- Hover: Yellow accent, shadow lift

### Skill Display Pattern
- Section title: H2
- Skills grouped by category (Languages, Frameworks, Tools, etc.)
- Display as badge tags in a flex row
- Alternating yellow/blue for visual interest

### Footer Pattern
- Background: Dark gray or black
- Text: White and light gray
- Sections: About, Links, Contact
- Social icons: With hover color change to yellow
- Copyright: Caption text

### Section Spacing
- Between major sections: 64px top/bottom margin
- Within sections: 24-32px for subsections
- White space is your friend—don't overcrowd

---

## Accessibility Guidelines

### Color Contrast
- All text on yellow: Must use black (contrast ratio ≥ 4.5:1) ✅
- All text on light blue: Can use black or dark gray
- Interactive elements: Min 3:1 contrast ratio

### Typography
- Minimum font size: 14px for body text
- Maximum line length: 60-80 characters (ideal)
- Line height: Min 1.5 for readability

### Interactions
- Focus states: Yellow outline (3px) on all interactive elements
- Keyboard nav: All buttons/links accessible via Tab key
- Links: Must be distinguishable (underline, different color, etc.)

### Images
- All images: Descriptive alt text
- Decorative images: `alt=""`
- Icons: Appropriate ARIA labels or text alternatives

---

## Code Example: CSS Variables

```css
:root {
  /* Colors */
  --color-primary-yellow: #FFD700;
  --color-secondary-blue: #87CEEB;
  --color-neutral-white: #FFFFFF;
  --color-neutral-black: #000000;
  --color-gray-light: #F5F5F5;
  --color-gray-medium: #CCCCCC;
  --color-gray-dark: #333333;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Courier New', monospace;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

---

## Visual Inspiration & Tone

**Aesthetic**: Modern, tech-forward, approachable  
**Color Psychology**:
- Yellow: Energy, innovation, highlights important content
- Light Blue: Trust, calm professionalism
- Black & White: Clarity, contrast, readability

**Tone of Voice**: Professional yet personable, showcasing expertise and leadership  
**Best For**: AI/Tech portfolios, highlighting projects and technical depth

---

## Do's and Don'ts

### ✅ Do
- Use yellow for CTAs and important highlights
- Maintain plenty of white space
- Keep hover states consistent (yellow accent)
- Use the color palette strictly
- Test contrast for accessibility
- Use consistent typography hierarchy

### ❌ Don't
- Mix too many colors outside the palette
- Use pure red or green (use semantic colors)
- Make text smaller than 14px
- Forget hover/focus states
- Use yellow text on white background
- Clash yellow and light blue together (pick one per section)

---

## Next Steps

1. **Create HTML structure** with semantic tags (header, nav, main, section, footer)
2. **Implement CSS variables** for easy theming and updates
3. **Build components** following the specs above
4. **Test responsiveness** at 320px, 768px, 1024px breakpoints
5. **Validate accessibility** using WAVE or Lighthouse
6. **Add micro-interactions** (button hover, link underlines, smooth transitions)

---

**Version**: 1.0  
**Last Updated**: April 2026  
**Designer**: Seng Nu Pan (AI Engineer Portfolio)
