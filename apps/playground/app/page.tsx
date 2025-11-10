import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Megazord UI</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A React UI component library built with TailwindCSS v4 and inspired by shadcn/ui design principles.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Components</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/components/button" 
                  className="text-primary hover:underline text-lg"
                >
                  Button →
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Built with TailwindCSS v4</li>
              <li>✅ Customizable theme with CSS variables</li>
              <li>✅ Tree-shakeable</li>
              <li>✅ TypeScript support</li>
              <li>✅ Tested with Vitest</li>
              <li>✅ Multiple variants and sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
