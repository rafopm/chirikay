/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      fontSize: {
        '80px': '80px',
        '60px': '60px',
        '50px': '50px',
        '40px': '40px',
      },
      colors: {
        rv: {
          dark: 'var(--rv-dark)',
          'very-dark': 'var(--rv-very-dark)',
          'very-light': 'var(--rv-very-light)',
          light: 'var(--rv-light)',
          gray: 'var(--rv-gray)',
          cta: 'var(--rv-cta)',
          accent: 'var(--rv-accent)',

          // RGB variables para usar con opacidad o backgrounds dinámicos
          'dark-rgb': 'var(--rv-dark-rgb)',
          'very-dark-rgb': 'var(--rv-very-dark-rgb)',
          'very-light-rgb': 'var(--rv-very-light-rgb)',
          'light-rgb': 'var(--rv-light-rgb)',
          'gray-rgb': 'var(--rv-gray-rgb)',
          'cta-rgb': 'var(--rv-cta-rgb)',
          'accent-rgb': 'var(--rv-accent-rgb)',
        },
        transparent: 'transparent',
      },

      typography: {
        DEFAULT: {
          css: {
            color: 'var(--rv-dark)',
            maxWidth: '100% !important',
            fontFamily: 'var(--font-primary)',

            h1: {
              fontSize: '3.052em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
              fontWeight: '900',
            },
            h2: {
              fontSize: '2.441em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
              fontWeight: '900',
            },
            h3: {
              fontSize: '1.953em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
              fontWeight: '900',
            },
            h4: {
              fontSize: '1.563em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
              fontWeight: '900',
            },
            h5: {
              fontSize: '1.25em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem !important',
              lineHeight: '1.2',
              fontWeight: '700',
            },
            p: {
              color: 'var(--rv-dark)',
              fontFamily: 'var(--font-primary)',
              marginBottom: '1em !important',
            },
            strong: {
              color: 'var(--rv-dark)',
              fontWeight: '700',
            },
            a: {
              color: 'var(--rv-accent)',
              fontFamily: 'var(--font-primary)',
              textDecoration: 'none !important',
              '&:hover': {
                color: 'var(--rv-cta)',
              },
            },
            button: {
              color: 'var(--rv-light) !important',
              '&:hover': {
                color: 'var(--rv-light)',
              },
              textDecoration: 'none !important',
            },
            th: {
              color: 'var(--rv-dark)',
            },
            ul: {
              listStyleType: 'disc !important',
              listStylePosition: 'outside',
              marginTop: '0.5rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            },
            ol: {
              listStyleType: 'decimal !important',
              listStylePosition: 'outside',
              marginTop: '0.5rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            },
            li: {
              color: 'var(--rv-dark)',
              marginBottom: '0.2rem',
              fontFamily: 'var(--font-primary)',
            },
            hr: {
              borderColor: 'var(--rv-dark)',
              borderWidth: '1px',
              borderStyle: 'solid',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
  darkMode: 'class',
};
