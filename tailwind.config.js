/** @type {import('tailwindcss').Config} */

import plugin from 'tw-elements/dist/plugin.cjs'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      mobile: '0px',
      // => @media (min-width: 768px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      full: '1920',
      // => @media (min-width: 1920px) { ... }

      ultrawide: '2560',
      // => @media (min-width: 2560px) { ... }
    },
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      fontFamily: {
        lobster: ['Lobster'],
        chivo: ['Chivo'],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [
    plugin,
  ],
}