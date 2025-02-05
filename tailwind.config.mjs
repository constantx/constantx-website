/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
        sans: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
        serif: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
        heading: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
        copy: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
        meta: ['"JetBrains Mono"', 'SF Mono', 'monospace'],
      },
      screens: {
        xs: '420px',
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
      colors: {
        cream: {
          DEFAULT: 'hsl(var(--brand-cream))',
          foreground: 'hsl(var(--brand-cream-foreground))',
        },
        dark: {
          DEFAULT: 'hsl(var(--brand-chocolate))',
          foreground: 'hsl(var(--brand-chocolate-foreground))',
        },
        cool: {
          DEFAULT: 'hsl(var(--brand-cool))',
          foreground: 'hsl(var(--brand-cool-foreground))',
        },
        hot: {
          DEFAULT: 'hsl(var(--brand-hot))',
          foreground: 'hsl(var(--brand-hot-foreground))',
        },
      },
    },
  },
  plugins: [],
}