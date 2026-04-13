/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Finder design tokens (from Figma variables)
        ink: {
          main: '#232320',      // foreground/main, black
          secondary: '#41403b', // foreground/secondary
          tertiary: '#74736e',  // foreground/tertiary
        },
        surface: {
          main: '#ffffff',        // background/main
          secondary: '#f5f4ef',   // background/secondary
          tinted: '#fafaf9',      // soft cream used on sections
        },
        line: {
          normal: '#d4d3ce', // border/normal
        },
        brand: {
          DEFAULT: '#1d53ff', // brand/normal
        },
        accent: {
          green: '#1dd751',
          greenSubtle: '#e5ffed',
          yellow: '#ffd23b',
          yellowSubtle: '#fff9e5',
          sky: '#00b2ff',
          skySubtle: '#e5f7ff',
          red: '#db2420',
        },
      },
      fontFamily: {
        sans: [
          'Modern Era',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        sm: '8px',
        ten: '10px',
        xl2: '12px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px 0 rgba(0,0,0,0.04)',
        navTop:
          '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
