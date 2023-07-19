/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mb: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      colors: {
        'primary': '#60a5fa',
        'secondary': '#1d4ed8',
        'accent': '#1a5f7a',
        'dark': '#242424',
        'light': '#cccccc',
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        ping: {
          "75%, 100%": { scale: 2, opacity: 0 },
        },
        floating: {
          "0%, 100%": { transform: "translateY(9px)" },
          "50%": { transform: "translateY(3px)" },
        },
        floatingsmall: {
          "0%, 100%": { transform: "translateY(9px)" },
          "50%": { transform: "translateY(0px)" },
        },
        floatingsmall2: {
          "0%, 100%": { transform: "translateY(12px)" },
          "50%": { transform: "translateY(3px)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
        spp: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ping: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "75%, 100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        floatingsmall: "floatingsmall 5s ease-in-out infinite",
        floatingsmall2: "floatingsmall2 4s ease-in-out infinite",
        spp: "spp 1.3s linear infinite",
        "text-shimmer": "text-shimmer 4s ease-out infinite alternate",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
