// src/utils/navigation.ts
export const isActiveRoute = (currentPath: string, href: string): boolean => {
  // Elimina posibles trailing slashes para consistencia
  const cleanCurrent = currentPath.replace(/\/+$/, "");
  const cleanHref = href.replace(/\/+$/, "");

  // Home exacto
  if (cleanHref === "") return cleanCurrent === "";

  // Coincidencia exacta o subruta
  return cleanCurrent === cleanHref || cleanCurrent.startsWith(`${cleanHref}/`);
};

export const isHomePage = (pathname: string): boolean => {
  return pathname === "/";
};

export const getNavClasses = (isHome: boolean): string => {
  return isHome ? "" : "not-home";
};

export const getLinkClasses = (
  isActive: boolean,
  baseClasses: string
): string => {
  return `${baseClasses} ${isActive ? "active" : ""}`;
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Composable para manejar el estado del menú móvil
export class MobileMenuController {
  private toggleButton: HTMLElement | null = null;
  private navbar: HTMLElement | null = null;
  private body: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.toggleButton = document.getElementById("toggle-menu");
    this.navbar = document.getElementById("navbar-cta");
    this.body = document.body;
  }

  toggle(): void {
    if (!this.toggleButton || !this.navbar) return;

    const isExpanded =
      this.toggleButton.getAttribute("aria-expanded") === "true";
    this.toggleButton.setAttribute("aria-expanded", (!isExpanded).toString());

    this.navbar.classList.toggle("hidden");

    if (this.navbar.classList.contains("hidden")) {
      this.close();
    } else {
      this.open();
    }
  }

  private open(): void {
    this.navbar?.classList.add("showing");
    this.toggleButton?.classList.add("active");
    if (this.body) this.body.style.overflow = "hidden";
  }

  private close(): void {
    this.navbar?.classList.remove("showing");
    this.toggleButton?.classList.remove("active");
    if (this.body) this.body.style.overflow = "";
  }

  closeOnResize(): void {
    if (
      window.innerWidth >= 1024 &&
      !this.navbar?.classList.contains("hidden")
    ) {
      this.toggle();
    }
  }

  closeOnOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (
      !this.navbar?.contains(target) &&
      !this.toggleButton?.contains(target)
    ) {
      if (!this.navbar?.classList.contains("hidden")) {
        this.toggle();
      }
    }
  }
}
