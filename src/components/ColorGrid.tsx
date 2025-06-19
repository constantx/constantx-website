import { useState } from 'react';

interface ColorChip {
  name: string;
  backgroundVar: string;
  foregroundVar: string;
  category: string;
}

const colors: ColorChip[] = [
  // Main colors
  {
    name: 'Brand',
    backgroundVar: 'var(--color-brand)',
    foregroundVar: 'var(--color-brand-foreground)',
    category: 'Main',
  },
  {
    name: 'AI',
    backgroundVar: 'var(--color-ai)',
    foregroundVar: 'var(--color-ai-foreground)',
    category: 'Main',
  },
  
  // Status colors
  {
    name: 'Success',
    backgroundVar: 'var(--color-success)',
    foregroundVar: 'var(--color-success-foreground)',
    category: 'Status',
  },
  {
    name: 'Warning',
    backgroundVar: 'var(--color-warning)',
    foregroundVar: 'var(--color-warning-foreground)',
    category: 'Status',
  },
  {
    name: 'Warning Muted',
    backgroundVar: 'var(--color-warning-muted)',
    foregroundVar: 'var(--color-warning-muted-foreground)',
    category: 'Status',
  },
  {
    name: 'Error',
    backgroundVar: 'var(--color-error)',
    foregroundVar: 'var(--color-error-foreground)',
    category: 'Status',
  },
  
  // Semantic colors
  {
    name: 'Cool',
    backgroundVar: 'var(--color-cool)',
    foregroundVar: 'var(--color-cool-foreground)',
    category: 'Semantic',
  },
  {
    name: 'Hot',
    backgroundVar: 'var(--color-hot)',
    foregroundVar: 'var(--color-hot-foreground)',
    category: 'Semantic',
  },
  
  // Core theme colors
  {
    name: 'Background',
    backgroundVar: 'var(--color-background)',
    foregroundVar: 'var(--color-foreground)',
    category: 'Core',
  },
  {
    name: 'Primary',
    backgroundVar: 'var(--color-primary)',
    foregroundVar: 'var(--color-primary-foreground)',
    category: 'Core',
  },
  {
    name: 'Secondary',
    backgroundVar: 'var(--color-secondary)',
    foregroundVar: 'var(--color-secondary-foreground)',
    category: 'Core',
  },
  {
    name: 'Muted',
    backgroundVar: 'var(--color-muted)',
    foregroundVar: 'var(--color-muted-foreground)',
    category: 'Core',
  },
  {
    name: 'Accent',
    backgroundVar: 'var(--color-accent)',
    foregroundVar: 'var(--color-accent-foreground)',
    category: 'Core',
  },
  
  // Standalone colors (using foreground as text color)
  {
    name: 'Border',
    backgroundVar: 'var(--color-border)',
    foregroundVar: 'var(--color-foreground)',
    category: 'Core',
  },
  
  // Chart colors
  {
    name: 'Chart 1',
    backgroundVar: 'var(--color-chart-1)',
    foregroundVar: 'var(--color-background)',
    category: 'Charts',
  },
  {
    name: 'Chart 2',
    backgroundVar: 'var(--color-chart-2)',
    foregroundVar: 'var(--color-background)',
    category: 'Charts',
  },
  {
    name: 'Chart 3',
    backgroundVar: 'var(--color-chart-3)',
    foregroundVar: 'var(--color-background)',
    category: 'Charts',
  },
  {
    name: 'Chart 4',
    backgroundVar: 'var(--color-chart-4)',
    foregroundVar: 'var(--color-background)',
    category: 'Charts',
  },
  {
    name: 'Chart 5',
    backgroundVar: 'var(--color-chart-5)',
    foregroundVar: 'var(--color-background)',
    category: 'Charts',
  },
];

export default function ColorGrid() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const groupedColors = colors.reduce((acc, color) => {
    if (!acc[color.category]) {
      acc[color.category] = [];
    }
    acc[color.category].push(color);
    return acc;
  }, {} as Record<string, ColorChip[]>);

  return (
    <div className="col-span-full space-y-8 p-4 lg:p-6 my-12">
      {Object.entries(groupedColors).map(([category, categoryColors]) => (
        <div key={category}>
          <h5 className="text-muted-foreground mb-4 uppercase tracking-wider text-center">
            {category}
          </h5>
          <div className="flex flex-wrap gap-4 justify-center">
            {categoryColors.map((color) => (
              <div
                key={color.name}
                className="relative"
                onMouseEnter={() => setHoveredColor(color.name)}
                onMouseLeave={() => setHoveredColor(null)}
              >
                <div
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg border border-border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer flex items-center justify-center p-2"
                  style={{ 
                    backgroundColor: color.backgroundVar,
                    color: color.foregroundVar,
                  }}
                >
                  <div className="text-center font-mono text-sm! font-medium leading-tight uppercase">
                    {color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}