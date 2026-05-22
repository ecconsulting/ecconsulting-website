/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15120f',
        charcoal: '#24201c',
        graphite: '#3a342f',
        champagne: '#d6b56d',
        gilt: '#b89348',
        porcelain: '#f8f4ec',
        linen: '#eee4d5',
        merlot: '#6f1834',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 70px rgba(184, 147, 72, 0.18)',
        soft: '0 18px 50px rgba(21, 18, 15, 0.12)',
      },
      backgroundImage: {
        'quiet-luxury':
          'linear-gradient(135deg, rgba(21,18,15,0.98), rgba(36,32,28,0.96))',
        'porcelain-band':
          'linear-gradient(180deg, #f8f4ec 0%, #f2eadf 100%)',
      },
    },
  },
  plugins: [],
};
