# Megazord UI

A modern React UI component library built with TailwindCSS v4 and inspired by shadcn/ui design principles.

## 📦 Packages

This monorepo contains:

- **[@megazord-ui/ui](./packages/ui)** - The core UI component library
- **[playground](./apps/playground)** - Next.js app for component documentation and testing

## ✨ Features

- 🎨 Built with TailwindCSS v4
- 🔧 Customizable theme with CSS variables
- 📦 Tree-shakeable
- 🎯 TypeScript support
- ✅ Tested with Vitest
- 🎭 Multiple variants and sizes
- 📚 MDX documentation

## 🚀 Quick Start

### Installation

```bash
npm install @megazord-ui/ui
```

### Usage

Import the styles and components:

```tsx
import '@megazord-ui/ui/styles.css';
import { Button } from '@megazord-ui/ui';

function App() {
  return <Button>Click me</Button>;
}
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Setup

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format

# Start playground development server
npm run dev
```

### Project Structure

```
megazord-ui/
├── packages/
│   └── ui/              # UI component library
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── lib/        # Utilities
│       │   └── styles.css  # Theme & styles
│       └── package.json
├── apps/
│   └── playground/      # Next.js documentation app
│       ├── app/
│       │   ├── components/ # Component docs (MDX)
│       │   └── page.tsx
│       └── package.json
└── package.json
```

## 🎨 Theming

The library uses CSS variables for theming. Customize the theme by overriding variables:

```css
@theme {
  --color-primary: 220 90% 56%;
  --color-primary-foreground: 0 0% 100%;
  /* ... other colors */
}
```

See the [theme configuration](./packages/ui/src/styles.css) for all available variables.

## 📚 Components

Currently available components:

- **Button** - Versatile button with multiple variants and sizes

More components coming soon!

## 🧪 Testing

Tests are written using Vitest and React Testing Library:

```bash
# Run tests
npm test

# Watch mode
npm run test:watch
```

## 📖 Documentation

Visit the playground app to see live examples and documentation:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

## 📄 License

MIT