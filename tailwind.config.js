/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      keyframes: {
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },

      screens:{
        xs: "320px",
        sn: "375px",
        snl: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bobyFont:["Montserrat", "sans-serif"],
        titleFont:["Inter", "sans-serif"],
      },

      fontWeight:{
        titleWeight:700,
      },
      
      boxShadow:{
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors:{
        // bodyColor:"#0A192F",
        // bodyColor:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);',
        bodyColor:"rgb(2,0,36)",
       // bodyColor:"linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
       // textGreen:"#64ffda",
        textGreen : "#02FFF2",
        textLight:"#ccd6f6",
        textDark:"#8892b0",
        hoverColor:"rgba(100,255,218,0.1)",
      },

      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'reverse-spin-slow': 'reverse-spin 5s linear infinite',
      }

    },
  },
  plugins: [],
}