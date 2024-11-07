import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(0, 0, 0, .1), var(--main-color))',
      },
      animation: {
        float: 'floatImage 3s ease-in-out infinite',
      },
      keyframes: {
        floatImage: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2.4rem)' }, 
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

