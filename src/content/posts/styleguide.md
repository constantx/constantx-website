---
title: Styleguide
description: 'Complete reference for all Markdown elements supported in articles'
pubDate: '2013-09-20'
heroImage: '/blog-placeholder-3.jpg'
topics:
- styleguide
- reference
draft: true
---

This is a comprehensive styleguide showing all supported Markdown elements and their usage in articles.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph Formatting

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur?

Use _emphasis_ with single underscores or *asterisks*, and **strong importance** with double underscores or **asterisks**. Create [links](/) with square brackets and parentheses.

## Images

### Basic Syntax
```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Example
![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

### Basic Blockquote
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with Attribution
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Code Blocks

### JavaScript Example
```javascript
module.exports = {
  'social': [{
    'type': 'dribbble',
    'title': 'dribbble',
    'icon': 'typcn typcn-social-dribbble',
    'href': 'https://dribbble.com/constantx'
  }]
};
```

### HTML Example
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Lists

### Unordered List
- List item
- Another item
- And another item

### Ordered List
1. First item
2. Second item
3. Third item

### Nested List
- Category 1
  - Subitem 1
  - Subitem 2
- Category 2
  - Subitem A
  - Subitem B

## Tables

### Example Table
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Special Elements

### Text Formatting
<abbr title="Graphics Interchange Format">GIF</abbr> • H<sub>2</sub>O • X<sup>n</sup> + Y<sup>n</sup>

### Keyboard Input
Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>

### Highlighting
Most <mark>salamanders</mark> are nocturnal creatures

## Notes
- Use `---` for horizontal rules
- Footnotes are supported using [^1] syntax
- Always use relative paths for images
