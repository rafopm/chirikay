// src/utils/scrollEffects.ts
export class ScrollEffects {
    private elements: {
      mainNav: HTMLElement | null;
      navInner: HTMLElement | null;
      logoImage: HTMLElement | null;
      menuItems: NodeListOf<Element>;
      hamburger: HTMLElement | null;
    };

    private ticking: boolean = false;
    private readonly scrollThreshold: number = 50;

    constructor() {
      this.elements = {
        mainNav: document.getElementById("main-nav"),
        navInner: document.getElementById("nav-inner"),
        logoImage: document.querySelector(".logo-image"),
        menuItems: document.querySelectorAll("[class*='bg-[var(--rv-dark)]']"),
        hamburger: document.querySelector("#toggle-menu")
      };
      
      this.bindEvents();
    }
  
    private bindEvents(): void {
      window.addEventListener("scroll", this.handleScroll.bind(this));
    }
  
    private handleScroll(): void {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateScrollState();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }
  
    private updateScrollState(): void {
      const scrollY = window.scrollY;
      const shouldAddScrolledClass = scrollY > this.scrollThreshold;
      
      this.toggleScrolledClass(shouldAddScrolledClass);
    }

    private toggleScrolledClass(add: boolean): void {
      const { mainNav, navInner, logoImage, menuItems, hamburger } = this.elements;

      mainNav?.classList.toggle("scrolled", add);
      navInner?.classList.toggle("scrolled", add);
      logoImage?.classList.toggle("scrolled", add);
      hamburger?.classList.toggle("scrolled", add);
      
      menuItems.forEach(el => el.classList.toggle("scrolled", add));
    }
  
    destroy(): void {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }