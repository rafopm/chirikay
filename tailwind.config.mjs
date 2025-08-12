/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Spectral', 'serif'],
        secondary: ['JetBrains Mono', 'monospace'],
        spectral: ['Spectral', 'serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '80px': '80px',
        '60px': '60px',
        '50px': '50px',
        '40px': '40px',
        '48px': '48px',
        '32px': '32px',
        '20px': '20px',
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: 'var(--rv-dark)',
            maxWidth: '100%',
            fontFamily: theme('fontFamily.spectral'),
            backgroundColor: 'var(--rv-very-light)',
            '--tw-prose-body': 'var(--rv-dark)',
            '--tw-prose-headings': 'var(--rv-dark)',
            '--tw-prose-links': 'var(--rv-accent)',
            '--tw-prose-links-hover': 'var(--rv-cta)',
            '--tw-prose-underline': 'var(--rv-cta)',
            '--tw-prose-underline-hover': 'var(--rv-cta)',
            h1: {
              fontSize: '3.052em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
              fontWeight: 900,
              fontFamily: theme('fontFamily.spectral'),
            },
            h2: {
              fontSize: '2.441em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
              fontFamily: theme('fontFamily.spectral'),
            },
            h3: {
              fontSize: '1.953em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
              fontFamily: theme('fontFamily.spectral'),
            },
            h4: {
              fontSize: '1.563em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
              fontFamily: theme('fontFamily.spectral'),
            },
            h5: {
              fontSize: '1.25em',
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
              fontFamily: theme('fontFamily.spectral'),
            },
            h6: {
              color: 'var(--rv-dark)',
              marginBottom: '0.5rem',
              fontWeight: 700,
              fontFamily: theme('fontFamily.spectral'),
            },
            p: {
              color: 'var(--rv-dark)',
              fontFamily: theme('fontFamily.jetbrains-mono'),
              marginBottom: '1.2em',
              '&:last-child': {
                marginBottom: 0,
              },
            },
            strong: {
              color: 'var(--rv-dark)',
              fontWeight: 600,
            },
            a: {
              color: 'var(--rv-accent)',
              fontFamily: theme('fontFamily.jetbrains-mono'),
              textDecoration: 'none',
              fontWeight: 'normal',
              '&:hover': {
                color: 'var(--rv-cta)',
              },
            },
            blockquote: {
              color: 'var(--rv-dark)',
              borderLeftColor: 'var(--rv-cta)',
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:first-of-type::after': {
              content: 'none',
            },
            code: {
              fontFamily: theme('fontFamily.secondary'),
              fontWeight: '400',
              backgroundColor: 'var(--rv-light)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },
            pre: {
              fontFamily: theme('fontFamily.secondary'),
              backgroundColor: 'var(--rv-light)',
              borderRadius: '0.5em',
              padding: '1em',
              overflowX: 'auto',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5em',
              marginBottom: '1em',
              'li > &': {
                marginTop: '0.5em',
              },
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5em',
              marginBottom: '1em',
              'li > &': {
                marginTop: '0.5em',
              },
            },
            li: {
              color: 'var(--rv-dark)',
              marginBottom: '0.5em',
              fontFamily: theme('fontFamily.spectral'),
              '&::marker': {
                color: 'var(--rv-dark)',
              },
            },
            hr: {
              borderColor: 'var(--rv-dark)',
              borderTopWidth: '1px',
              marginTop: '2em',
              marginBottom: '2em',
            },
            'tbody tr': {
              borderBottomColor: 'var(--rv-light)',
            },
            th: {
              color: 'var(--rv-dark)',
              fontWeight: '600',
            },
            td: {
              color: 'var(--rv-dark)',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
  darkMode: 'class',
};