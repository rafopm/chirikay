declare module "*/HeaderLink.astro" {
    interface Props {
      href: string;
      variant?: 'desktop' | 'mobile';
      class?: string;
      [key: string]: any;
    }
    
    const HeaderLink: (props: Props & { children?: any }) => any;
    export default HeaderLink;
  }