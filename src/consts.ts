// Información básica del sitio
export const SITE = {
  URL: "https://chirikay.pe",
  TITLE: "ChiriKay | Chirimoya Orgánica de Huarochirí",
  DESCRIPTION: "Chirimoyas 100% orgánicas cultivadas en comunidad en Huarochirí, Perú. Dulces, cremosas y saludables, fruto de la agricultura familiar andina.",
  AUTHOR: "ChiriKay",
  MARCA: "ChiriKay",
  COPYRIGHT: `ChiriKay ${new Date().getFullYear()}`,
  LANGUAGE: "es",
  GEO: {
    LATITUDE: -12.049267,  // coordenadas aproximadas de Huarochirí
    LONGITUDE: -76.476921,
    ADRESS_LOCALITY: "Huarochirí",
    ADRESS_REGION: "Lima",
    REGION: "PE",
    PLACENAME: "Huarochirí, Lima - Perú"
  }
};

// Metadatos
export const META = {
  ROBOTS: "index, follow",
  THEME_COLOR: "#4F9E4A",
  FAVICON: {
    SVG: "/favicon.svg",
    ICO: "/favicon.ico",
    MANIFEST: "/images/favicon/manifest.json"
  },
  VIEWPORT: "width=device-width,initial-scale=1",
  MOBILE: {
    WEB_APP_CAPABLE: "yes",
    APPLE: {
      WEB_APP_CAPABLE: "yes",
      STATUS_BAR_STYLE: "default"
    },
    FORMAT_DETECTION: "telephone=no",
    HANDHELD_FRIENDLY: "true"
  },
  BROWSER_COMPATIBILITY: "ie=edge"
};

// Fuentes
export const FONTS: Record<string, Record<string, string>> = {
  SPECTRAL: {
    REGULAR: "/fonts/Spectral-Regular.woff2",
    SEMIBOLD: "/fonts/Spectral-SemiBold.woff2",
    BOLD: "/fonts/Spectral-Bold.woff"
  },
  JETBRAINSMONO: {
    VARIABLE: "/fonts/JetBrainsMono.woff2"
  }
};

// Configuración completa de iconos
export const ICONS = {
  APPLE: [
    { sizes: "57x57", href: "/images/favicon/apple-icon-57x57.png" },
    { sizes: "60x60", href: "/images/favicon/apple-icon-60x60.png" },
    { sizes: "72x72", href: "/images/favicon/apple-icon-72x72.png" },
    { sizes: "76x76", href: "/images/favicon/apple-icon-76x76.png" },
    { sizes: "114x114", href: "/images/favicon/apple-icon-114x114.png" },
    { sizes: "120x120", href: "/images/favicon/apple-icon-120x120.png" },
    { sizes: "144x144", href: "/images/favicon/apple-icon-144x144.png" },
    { sizes: "152x152", href: "/images/favicon/apple-icon-152x152.png" },
    { sizes: "180x180", href: "/images/favicon/apple-icon.png" }
  ],
  FAVICON: [
    { type: "image/png", sizes: "16x16", href: "/images/favicon/favicon-16x16.png" },
    { type: "image/png", sizes: "32x32", href: "/images/favicon/favicon-32x32.png" },
    { type: "image/png", sizes: "96x96", href: "/images/favicon/favicon-96x96.png" },
    { type: "image/png", sizes: "192x192", href: "/images/favicon/android-icon-192x192.png" },
    { type: "image/png", sizes: "512x512", href: "/images/favicon/android-icon-512x512.png" }
  ],
  MS: {
    TILE_COLOR: "#ffffff",
    TILE_IMAGE: "/images/favicon/ms-icon-144x144.png",
    CONFIG: [
      { name: "msapplication-square70x70logo", content: "/images/favicon/ms-icon-70x70.png" },
      { name: "msapplication-square150x150logo", content: "/images/favicon/ms-icon-150x150.png" },
      { name: "msapplication-wide310x150logo", content: "/images/favicon/ms-icon-310x150.png" },
      { name: "msapplication-square310x310logo", content: "/images/favicon/ms-icon-310x310.png" }
    ]
  },
  SAFARI_PIN: {
    href: "favicon.svg",
    color: "#5bbad5"
  }
};

// Configuración de recursos externos
export const EXTERNAL_RESOURCES = {
  VIMEO: [
    "https://player.vimeo.com",
    "https://f.vimeocdn.com",
    "https://vod-adaptive-ak.vimeocdn.com"
  ]
};

// Contacto
export const CONTACT = {
  WHATSAPP: "+51913723496",
  PHONE: "+51913723496",
  EMAIL: "NFQOLIVIO2022@HOTMAIL.COM",
  RAZON_SOCIAL: "ASOCIACION DE AGRICULTORES ORGANICOS CULTIVANDO SALUD",
  DOMICILIO_FISCAL: "JR. MARISCAL RAIGADA NRO. 1017 (COLEGIO JOSE GALVEZ) PROV. CONST. DEL CALLAO - PROV. CONST. DEL CALLAO - CALLAO",
  ADDRESS: "San José de Bellavista, San Antonio, Huarochirí, Lima - Perú",
  POSTAL_CODE: "15550",
  COORDINATES: `${SITE.GEO.LATITUDE},${SITE.GEO.LONGITUDE}`,
  RUC: "20601261660",

  MAP_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.5993163687829!2d-76.63067355769003!3d-11.810734738039741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105fd006652b61d%3A0xbe8748d5d4d04d7c!2sChirikay%20(Cultivando%20Salud)!5e1!3m2!1ses-419!2spe!4v1754789651400!5m2!1ses-419!2spe"
};

// Redes sociales
export const SOCIAL = {
  FACEBOOK: "https://www.facebook.com/profile.php?id=61577742179101",
  INSTAGRAM: "https://www.instagram.com/salud.cultivando",
  TWITTER: "",
  YOUTUBE: "",
  LINKEDIN: "",
  TIKTOK: "https://www.tiktok.com/@cultivandosalud1",
  SHARE_BASE_URLS: {
    FACEBOOK: "https://www.facebook.com/sharer/sharer.php?u=",
    TWITTER: "https://twitter.com/intent/tweet?url=",
    WHATSAPP: "https://api.whatsapp.com/send?text="
  }
};

// Logos
export const LOGO_MOBILE = "/images/logo-mobile.png";
export const LOGO_DESKTOP = "/images/logo-desktop.png";

// Horario de atención
export const BUSINESS_HOURS = {
  WEEKDAYS: {
    opens: "08:00",
    closes: "17:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  },
  SATURDAY: {
    opens: "09:00",
    closes: "14:00",
    days: ["Saturday"]
  },
  CLOSED: ["Sunday"]
};

// Mapeo de rutas
export const ROUTE_NAMES: Record<string, string> = {
  blog: "Blog",
  contactanos: "Contáctanos"
};

// Configuración PWA
export const PWA = {
  MANIFEST: {
    name: SITE.TITLE,
    short_name: "ChiriKay",
    description: SITE.DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: META.THEME_COLOR,
    icons: [
      {
        src: "/images/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/images/favicon/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/images/favicon/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  }
};