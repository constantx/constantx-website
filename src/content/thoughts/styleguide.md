---
title: Styleguide
description: "Complete reference for all Markdown elements supported in articles"
publishedAt: "2025-06-01"
heroImage: "/images/hero.jpg"
topics:
  - styleguide
  - reference
draft: false
---

This is a comprehensive styleguide demonstrating all supported Markdown elements and their visual styling in articles. Each section explains the purpose, appearance, and appropriate usage of different content types.

## Headings

Headings create a clear content hierarchy and improve readability. They're styled with consistent typography scaling and spacing, with larger sizes on desktop devices.

### Purpose & Styling

- **H1**: Main titles
- **H2**: Major sections
- **H3**: Subsections
- **H4**: Sub-subsections
- **H5**: Minor headings
- **H6**: Small labels

# H1 - Main Title

## H2 - Major Section

### H3 - Subsection

#### H4 - Sub-subsection

##### H5 - Minor Heading

###### H6 - Small Label

## Text Formatting

### Purpose & Styling

Text formatting provides semantic meaning and visual emphasis. All text uses responsive sizing (larger on desktop) with carefully chosen line heights for readability.

Regular paragraph text flows naturally with generous line spacing (1.7) and uses the full column width with responsive breakpoints. Paragraphs are styled with `text-lg` on medium screens and above for enhanced readability.

**Bold text** (`**bold**`) uses semibold font weight to create strong emphasis without being too heavy. Use for important terms, warnings, or key concepts.

_Italic text_ (`_italic_`) provides subtle emphasis for book titles, foreign words, or gentle highlighting.

[Links](/) are styled with brand color underlines positioned below the text (`underline-offset-4`) for a clean, modern appearance. They include hover states for better interaction feedback.

## Images

### Purpose & Styling

Images are automatically responsive and styled with rounded corners, subtle shadows, and border styling. They center themselves within their grid column and include proper alt text for accessibility.

```markdown
![Alt text](./path/image.jpg)
```

![example image](https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

**Features:**

- Automatic responsive sizing
- Rounded corners and subtle shadow
- Border styling that matches the design system
- Grid-aware positioning (full column width)
- Proper alt text support for accessibility

## Blockquotes

### Purpose & Styling

Blockquotes highlight important excerpts, testimonials, or referenced content. They feature a branded left border, muted background, and italic styling to distinguish them from regular text.

> This is a basic blockquote with italic styling and a branded left border. The background uses a muted color to create visual separation while maintaining readability.
>
> **Note:** You can use _Markdown syntax_ within blockquotes for additional formatting.

### Advanced Blockquotes with Citations

For quotes with attribution, use the `<cite>` tag and footnote references:

> To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life.
>
> — <cite>The Secret Life of Walter Mitty[^1]</cite>

[^1]: https://en.wikipedia.org/wiki/The_Secret_Life_of_Walter_Mitty_(2013_film)

## Code Elements

### Inline Code

Use `inline code` for short code snippets, variable names, or technical terms. Styled with monospace font, muted background, and rounded corners.

### Code Blocks

Code blocks support syntax highlighting and are styled with consistent spacing and borders. They span wider columns for better readability of longer lines.

```javascript
// JavaScript example with syntax highlighting
function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

const message = greetUser("Developer");
console.log(message);
```

```html
<!-- HTML example -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Clean, Semantic HTML</title>
  </head>
  <body>
    <main>
      <h1>Well-structured content</h1>
      <p>Accessible and semantic markup.</p>
    </main>
  </body>
</html>
```

**Features:**

- Syntax highlighting for multiple languages
- Wider grid columns for better code readability
- Consistent border and background styling
- Overflow handling for long lines

## Lists

### Purpose & Styling

Lists organize information hierarchically with proper indentation and spacing. Both ordered and unordered lists support nesting and maintain consistent typography.

### Unordered Lists

Use for items without specific order or priority:

- **Primary item** - Main points or features
- **Secondary item** - Supporting details
- **Tertiary item** - Additional context or examples

### Ordered Lists

Use for sequential steps, rankings, or prioritized content:

1. **First step** - Initial action or highest priority
2. **Second step** - Follow-up action or next priority
3. **Third step** - Final action or lowest priority

### Nested Lists

Combine different list types for complex information hierarchy:

- **Category A: Frontend**
  1. HTML - Structure and semantics
  2. CSS - Styling and layout
  3. JavaScript - Interactivity and behavior
- **Category B: Backend**
  1. Node.js - Server runtime
  2. Database - Data persistence
  3. APIs - Communication layer

## Tables

### Purpose & Styling

Tables present structured data with clear headers, alternating row colors, and responsive design. They feature rounded corners and proper border styling.

| Element Type   | Purpose           | Styling Features                            |
| -------------- | ----------------- | ------------------------------------------- |
| **Headings**   | Content hierarchy | Responsive typography, consistent spacing   |
| **Paragraphs** | Body content      | Optimized line height, responsive text size |
| **Code**       | Technical content | Monospace font, syntax highlighting         |
| **Images**     | Visual content    | Responsive, rounded corners, shadows        |

**Features:**

- Header styling with muted background
- Alternating row colors for readability
- Responsive width with proper spacing
- Border styling consistent with design system

## Special Text Elements

### Purpose & Styling

Special text elements provide semantic meaning and enhanced functionality:

- **Abbreviations**: <abbr title="Graphics Interchange Format">GIF</abbr> - Hover for full meaning
- **Subscript**: H<sub>2</sub>O - Chemical formulas and mathematical notation
- **Superscript**: X<sup>n</sup> + Y<sup>n</sup> - Exponents and footnote references
- **Highlighted text**: Most <mark>highlighted content</mark> uses warning colors for attention
- **Keyboard input**: Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> - Styled as actual keys

### Keyboard Input Styling

Keyboard elements (`<kbd>`) are styled to look like actual keyboard keys with:

- Secondary background color
- Border and shadow effects
- Monospace font with uppercase, tracked letters
- Responsive text sizing (xs on mobile, sm on desktop)

## Grid Layout System

### Purpose & Styling

The layout uses a 6-column CSS Grid system that provides flexible content positioning while maintaining readability and visual hierarchy.

#### Default Content Positioning

Regular text content (paragraphs, headings, lists) automatically positions itself in the optimal reading columns:

- **Mobile**: Full width for maximum readability
- **Small screens**: Columns 2-6 (leaving left margin)
- **Medium/Large**: Columns 3-6 (centered with balanced margins)
- **Extra large**: Columns 3-5 (optimal reading width)

#### Special Layout Classes

<div class="col-full p-4 bg-brand text-brand-foreground">
  <strong>col-full</strong>: Spans all 6 columns. Perfect for full-width content like banners, hero images, or important announcements that need maximum visual impact.
</div>

<div class="col-wide p-4 bg-brand text-brand-foreground">
  <strong>col-wide</strong>: Spans columns 2-6. Ideal for content that needs more space than regular text but should maintain some margin, such as large code blocks, data tables, or featured images.
</div>

<div class="col-left-sidebar p-4 bg-brand text-brand-foreground">
  <strong>col-left-sidebar</strong>: Narrow left column (columns 1-2). Perfect for metadata, author information, publication dates, or supplementary notes that complement the main content.
</div>

<div class="col-right-sidebar p-4 bg-brand text-brand-foreground">
  <strong>col-right-sidebar</strong>: Narrow right column (columns 5-6). Excellent for pull quotes, call-out boxes, related links, or highlighted information that supports the main narrative.
</div>

#### Usage Guidelines

- **Reading content**: Use default positioning for optimal readability
- **Media content**: Use `col-wide` or `col-full` for images, videos, or diagrams
- **Supplementary content**: Use sidebar classes for metadata or supporting information
- **Important announcements**: Use `col-full` for maximum attention

## Interactive Elements

### Footnotes

Footnotes provide additional context without interrupting the main flow. They're positioned in a dedicated area with clear references and return links[^2].

[^2]: Footnotes appear at the bottom with smaller text and muted styling, maintaining readability while providing supplementary information.

### Links and Navigation

All links include:

- Brand color styling with underline offset
- Hover states for interaction feedback
- Proper contrast ratios for accessibility
- Support for external link indication

## Responsive Design Features

### Typography Scaling

- **Mobile-first approach**: Base sizes optimized for small screens
- **Progressive enhancement**: Larger sizes on medium+ screens
- **Optimal reading**: Line height and spacing adjusted per device

### Grid Responsiveness

- **Mobile**: Single column layout for maximum readability
- **Tablet**: Balanced multi-column with appropriate margins
- **Desktop**: Full grid system with optimal reading widths
- **Large screens**: Constrained width to prevent overly long lines

### Content Adaptation

- **Images**: Automatic scaling and responsive sizing
- **Tables**: Horizontal scroll on smaller screens
- **Code blocks**: Proper overflow handling
- **Navigation**: Collapsible and touch-friendly on mobile

## Accessibility Features

### Semantic HTML

- Proper heading hierarchy for screen readers
- Alt text support for all images
- ARIA labels where appropriate
- Keyboard navigation support

### Color and Contrast

- High contrast ratios for text readability
- Color-blind friendly palette
- Multiple visual cues beyond color alone
- Respect for user's dark/light mode preferences

### Typography

- Sufficient line spacing for dyslexia-friendly reading
- Clear font choices optimized for screen reading
- Appropriate text sizing across all devices
- Logical content flow and structure

---

## Usage Notes

- **Performance**: All styles are optimized for fast loading and rendering
- **Maintainability**: Consistent design tokens ensure easy theme updates
- **Extensibility**: Grid system supports custom layouts and new content types
- **Standards compliance**: Follows modern web standards and best practices

This styleguide serves as both a visual reference and a comprehensive guide for creating accessible, well-designed content that works beautifully across all devices and user preferences.
