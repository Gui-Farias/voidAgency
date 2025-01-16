/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'my-orange': '#F36A22'
      },
      keyframes: {
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' }, // Início fora da tela (direita)
          '100%': { transform: 'translateX(0)', opacity: '1' }, // Fim na posição original
        },
        slideTop: {
          '0%': { transform: 'translateY(100%)', opacity: '0' }, // Início fora da tela (direita)
          '100%': { transform: 'translateY(0)', opacity: '1' }, // Fim na posição original
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        bounceDown: 'bounceDown 1s cubic-bezier(.3,-0.43,.72,1.66) infinite',
        slideInRight: 'slideInRight 0.7s ease-out',
        slideTop: 'slideTop 0.7s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },

  plugins: []
};
