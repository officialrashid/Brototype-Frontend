/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: 'class',
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
        '28rem': '28rem',
        "35.4rem": '35.4rem',
        '16.3rem': '16.3rem',
        '67.3rem':'67.3rem',
        '20.6rem':'20.6rem',
        '36.5rem': '36.5rem',
        '46rem': '46rem',
        '25.2rem': '25.2rem',
        '33rem': '33rem',
        '14.9rem': '14.9rem',
        '21.5rem':'21.5rem'
        
      },
      backgroundColor: {
        'custom-grey': '#D9D9D9',
        'custom-pink': '#87B7C4',
        'custom-domain': '#00000015',
        'custom-background': '#ECECF0',
        'custom-profile': '#806189',
        'custom-sidebar': '#090537',
        "custom-indigo": "#4b0082",
        "dark-purple":"#081A51",
         "reviewDetails1": "#FFE2E6",
         "reviewDetails2":"#FFF4DE",
         "reviewDetails3":"#DCFCE7",
         "reviewDetails4":"#F4E8FF",
         "reviewSmall1":"#F9597D",
         "timeLineUp":"#E6EFFB"
         
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        roboto: ['Roboto', 'sans'],
        sans: ["Open Sans"],
      },
      gridTemplateColumns:{
        "1/5" : "1fr 5fr"
      },
      colors:{
        "dark-purple":"#081A51",
        "light-white":"rgba(255,255,255,0.17)",
        'view-more': "#715DA6",
     },
    },
    plugins: {
      'postcss-nesting': {},
    '@tailwindcss/forms': {}
    }

  }
}