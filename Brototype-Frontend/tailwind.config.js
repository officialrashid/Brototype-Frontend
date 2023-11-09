/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      boxShadow: {
        BCCEFF: "var(--BCCEFF)",
      },
      spacing: {
        '38rem': '38rem',
        '24rem': '24rem',
        '28.3125rem': '28.3125rem',
        '48rem': '48rem',
        '6rem': '6rem',
        '16rem': '16rem',
        '3rem': '3rem',
        '65rem': '65rem',
        '4.5rem': '4.5rem',
        '32.3125rem': '32.3125rem',
        '10rem': '10rem',
        '4rem': '4rem',
        '8rem': '8rem',
        '20rem': '20rem',
        '10.6rem': '10.6rem',
        '4.2rem': '4.2rem',
        '11.2rem': '11.2rem',
        '10.4rem': '10.4rem',
        '62rem': '62rem',
        '13rem': '13rem',
        '9rem': '9rem',
        '42.5rem': '42.5rem',
        '34rem': '34rem',
        '36rem': '36rem',
        '22.5rem': '22.5rem',
        '28rem': '28rem'
      },
      backgroundColor: {
        'custom-grey': '#D9D9D9',
        'custom-pink': '#87B7C4',
        'custom-domain': '#00000015'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        roboto: ['Roboto', 'sans'],
      },

    },
    plugins: {
      'postcss-nesting': {},
    }

  }
}