// Información básica del sitio
export const SITE = {
  URL: "https://raizviva.pe",
  TITLE: "RaízViva | Alfalfa Orgánica de los Andes Peruanos",
  DESCRIPTION: "Alfalfa orgánica de calidad superior, cultivada a +3,300 msnm por familias en Lahuaytambo. Nutrición pura para ganado y equinos. Apoya el desarrollo rural andino.",
  AUTHOR: "Asociación Agro-productora RaízViva Lahuaytambo HRI",
  MARCA: "RaízViva",
  COPYRIGHT: `RaízViva ${new Date().getFullYear()}`,
  LANGUAGE: "es",
  GEO: {
    LATITUDE: -12.1041232,
    LONGITUDE: -76.3897286,
    ADRESS_LOCALITY: "Lahuaytambo",
    ADRESS_REGION: "Lima",
    REGION: "PE",
    PLACENAME: "Lima, Perú"
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
  GOLDPLAY: {
    REGULAR: "/fonts/Goldplay-Regular.woff2",
    SEMIBOLD: "/fonts/Goldplay-SemiBold.woff2",
    BOLDITALIC: "/fonts/Goldplay-BoldIt.woff2",
    BLACK: "/fonts/Goldplay-Black.woff2"
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
  WHATSAPP: "+51988021480",
  PHONE: "+51988021480",
  EMAIL: "rikchariychacrayoq@gmail.com",
  ADDRESS: "Calle Lahuaytambo S/N, Lahuaytambo, Huarochirí, Lima - Perú",
  POSTAL_CODE: "15550",
  COORDINATES: `${SITE.GEO.LATITUDE},${SITE.GEO.LONGITUDE}`
};

// Redes sociales
export const SOCIAL = {
  FACEBOOK: "https://www.facebook.com/raizvivaperu",
  INSTAGRAM: "",
  TWITTER: "",
  YOUTUBE: "",
  LINKEDIN: "",
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
    short_name: "RaízViva",
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
