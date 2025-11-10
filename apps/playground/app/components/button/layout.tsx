import Link from 'next/link';

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
