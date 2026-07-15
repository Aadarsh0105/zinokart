export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4F46E5',
          cyan: '#06B6D4',
          emerald: '#10B981',
        },
        surface: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        ink: {
          DEFAULT: '#0F172A',
          soft: '#475569',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -6px rgba(15, 23, 42, 0.08)',
        'glow': '0 20px 60px -12px rgba(79, 70, 229, 0.35)',
        'card': '0 8px 40px -12px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
