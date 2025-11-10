import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Megazord UI
          </Link>
          <div className="flex gap-6">
            <Link
              href="/components/button"
              className="text-sm hover:text-primary transition-colors"
            >
              Components
            </Link>
            <a
              href="https://github.com/gsmeira/megazord-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
