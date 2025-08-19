// src/config/navigation.ts
export interface NavItem {
    href: string;
    label: string;
    isExternal?: boolean;
  }
  
  export interface NavigationConfig {
    logo: {
      src: string;
      srcMobile?: string; 
      alt: string;
      width: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    };
    leftItems: NavItem[];
    rightItems: NavItem[];
    mobileItems: NavItem[];
  }
  
  export const navigationConfig: NavigationConfig = {
    logo: {
      src: "/images/logo/logo.webp",
      srcMobile: "/images/logo/logo-mobile.webp",
      alt: "Logo ChiriKay",
      width: {
        mobile: "w-[160px]",
        tablet: "w-[200px]",
        desktop: "w-[300px]"
      }
    },
    leftItems: [
      { href: "/blog", label: "Blog" }
    ],
    rightItems: [
      { href: "/contactanos", label: "Contáctanos" }
    ],
    mobileItems: [
      { href: "/blog", label: "Blog" },
      { href: "/contactanos", label: "Contáctanos" }
    ]
  };
  
  export const navStyles = {
    colors: {
      background: "bg-rv-dark",
      text: "text-white",
      mobileText: "text-rv-dark",
      mobileOverlay: "bg-rv-light/97",
      accent: "rv-accent",
      border: "border-white/20"
    },
    transitions: {
      fast: "transition-all duration-300",
      medium: "transition-all duration-400",
      slow: "transition-all duration-500"
    },
    spacing: {
      navHeight: "h-24 min-h-[100px]",
      navHeightScrolled: "h-[160px] min-h-[160px]",
      menuHeight: "h-16",
      menuWidth: "min-w-[200px]"
    }
  } as const;