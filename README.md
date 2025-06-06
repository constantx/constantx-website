# ConstantX Website

A modern, fast website built with Astro and deployed to GitHub Pages.

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator with modern web features
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[React](https://react.dev)** - UI components library
- **[MDX](https://mdxjs.com)** - Markdown with React components
- **[Node.js](https://nodejs.org)** - Runtime environment
- **GitHub Actions** - CI/CD for deployment to GitHub Pages

## ✨ Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support with React components
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Automated deployment to GitHub Pages

## 📁 Project Structure

```text
constantx-website/
├── public/                 # Static assets
│   ├── fonts/             # Font files
│   ├── images/            # Image assets
│   ├── favicon.svg        # Site favicon
│   └── CNAME              # GitHub Pages domain config
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/           # Content collections
│   │   ├── pages/         # Page content
│   │   └── posts/         # Blog posts
│   ├── layouts/           # Page layouts
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages
│   │   └── posts/         # Blog post pages
│   ├── styles/            # Global styles
│   ├── content.config.ts  # Content collection schemas
│   └── consts.ts          # Site constants
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── components.json        # UI components config
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- Yarn or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

### Development

Start the development server:

```sh
yarn dev
# or
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

Build the production site:

```sh
yarn build
# or
npm run build
```

### Preview

Preview the production build locally:

```sh
yarn preview
# or
npm run preview
```

## 🧞 Commands

All commands are run from the root of the project:

| Command        | Action                                           |
| :------------- | :----------------------------------------------- |
| `yarn install` | Installs dependencies                            |
| `yarn dev`     | Starts local dev server at `localhost:4321`     |
| `yarn build`   | Build your production site to `./dist/`         |
| `yarn preview` | Preview your build locally, before deploying    |

## 🚀 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

## 📄 License

This project is licensed under the MIT License.
