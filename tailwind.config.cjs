const theme = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

const PREFIX = '--ms'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  safelist: [
    {
      pattern: /font-*/
    },
    {
      pattern: /ms-*/
    },
    {
      pattern: /text-*/
    },
    {
      pattern: /mb-*/
    },
    {
      pattern: /bg-*/
    }
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      inherit: 'inherit',
      transparent: 'transparent',
      'heading-color': 'var(--ms-heading-color)',
      'subtitle-color': 'var(--ms-subtitle-color)',
      'paragraph-color': 'var(--ms-paragraph-color)',
      tertiary: `var(${PREFIX}-tertiary)`,
      ghost: `var(${PREFIX}-ghost)`,
      // default: `var(${PREFIX}-default)`,
      disabled: `var(${PREFIX}-disabled)`,
      placeholder: `var(${PREFIX}-placeholder)`,
    },
    screens: {
      xs: '320px',
      sm: '490px',
      md: '744px',
      lg: '960px',
      xl: '1440px',
      '2xl': '1920px',
    },
    boxShadow: {
      lg: '0px 32px 62px -16px rgba(0, 0, 0, 0.08)',
      DEFAULT: '0px 16px 22px -8px rgba(0, 0, 0, 0.1)',
      sm: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
    },
    extend: {
      spacing: {
        '4px': '0.25rem',
        '8px': '0.5rem',
        '16px': '1rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '48px': '3rem',
        '64px': '4rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      height: {
        '4.5': '1.125rem',
      },
      translate: {
        '4.5': '1.125rem',
      },
      opacity: {
        2: '0.02'
      },
      borderRadius: {
        btn: `var(${PREFIX}-btn-border-radius)`
      },
      borderWidth: {
        '1/2': '0.5px'
      },
      fontSize: {
        'heading-lg': [`var(${PREFIX}-heading-1)`, {lineHeight: '96px'}],
        'heading-md': [`var(${PREFIX}-heading-2)`, {lineHeight: '75px'}],
        'heading-sm': [`var(${PREFIX}-heading-3)`, {lineHeight: '54px'}],
        'subtitle-lg': [
          `var(${PREFIX}-subtitle-lg)`,
          {lineHeight: theme.lineHeight['9']}
        ],
        'subtitle-md': [`var(${PREFIX}-subtitle-md)`, {lineHeight: '30px'}],
        'subtitle-sm': [`var(${PREFIX}-subtitle-sm)`, {lineHeight: '27px'}],
        'paragraph-lg': [
          `var(${PREFIX}-paragraph-lg)`,
          {lineHeight: theme.lineHeight['6']}
        ],
        'paragraph-md': [`var(${PREFIX}-paragraph-md)`, {lineHeight: '21px'}],
        'paragraph-sm': [`var(${PREFIX}-paragraph-sm)`, {lineHeight: '21px'}],
      },
      fontFamily: {
        'sans': ['IBM Plex Sans Arabic', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'animate-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {opacity: 0.5},
          '50%': {opacity: 0.15}
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-react-aria-components'),

  ],
}
