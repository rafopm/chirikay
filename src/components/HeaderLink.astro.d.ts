declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro';

  export interface HeaderLinkProps {
    href: string;
    variant?: 'desktop' | 'mobile';
    class?: string;
    [key: string]: any;
  }

  export const HeaderLink: AstroComponentFactory<HeaderLinkProps>;
}
