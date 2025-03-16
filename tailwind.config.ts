import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        navbar: { bg: "#181818", link: "#B0B0B0", linkhover: "#E67E22", linkactive: "#8E44AD" },
        card: {bg: "#1E1E1E", border: "#292929", title: "#E0E0E0", description: "#B0B0B0"},
        form: {input: {focusoutline: "#E67E22"}},
        footer: {bg: "#181818", text: "#7E7E7E", link: "#E67E22"},
        primary: {
          bg: "#121212",
          text: "#E0E0E0",
          accent: "#4A90E2",
          error: "#E74C3C",
          success: "#27AE60",
          border: "#292929",
          button: "#E67E22",
          buttonhover: "#F39C12"
        },
        secondary: {
          bg: "#1E1E1E",
          button: "#8E44AD",
          buttonhover: "#A569BD",
          text: "#B0B0B0"
        },
        terciary: {
          accent: "#E67E22",
          text: "#7E7E7E"
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
