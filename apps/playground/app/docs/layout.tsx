import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      // nav={{
      //   title: 'Megazord UI',
      //   url: '/',
      // }}
      // links={[
      //   {
      //     text: 'GitHub',
      //     url: 'https://github.com/gsmeira/megazord-ui',
      //     active: 'nested-url',
      //   },
      // ]}
    >
      {children}
    </DocsLayout>
  );
}
