import { withOpacity } from './utils/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '1.875rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '45': '11.25rem',
        '50': '12.5rem',
      },
      borderRadius: {
        '7.5': '1.875rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '45': '11.25rem',
        '50': '12.5rem',
      },
      colors: {
        'primary': withOpacity('--color-primary'),
        'primary-muted': withOpacity('--color-primary-muted', 0.9),
        'primary-dark': withOpacity('--color-primary-dark'),

        'white': withOpacity('--color-text-white'),
        'white-light': withOpacity('--color-text-white-light'),
        'white-muted': withOpacity('--color-text-white-muted'),

        'accent': withOpacity('--color-accent'),

        'grey': withOpacity('--color-grey'),
        'grey-2': withOpacity('--color-grey-2'),

        'gradient-accent-start': withOpacity('--gradient-accent-start'),
        'gradient-accent-end': withOpacity('--gradient-accent-end'),

        'gradient-cards-start': withOpacity('--gradient-cards-start', 0.5),
        'gradient-cards-end': withOpacity('--gradient-cards-end', 0.5),
      },
      fontFamily: {
        'rubik': 'Rubik, ui-sans-serif, system-ui, sans-serif',
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      screens: {
        'hero': '1190px',
        'tight': '1170px',
        'footer': '1060px'
      }
    },
  },
  safelist: ['carousel'],
  plugins: [],
}

