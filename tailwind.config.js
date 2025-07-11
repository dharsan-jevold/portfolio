// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0e0e10',
        purpleAccent: '#A855F7', // attractive purple
        neonGlow: '#8b5cf6',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        introExit: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        introExit: 'introExit 1.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
