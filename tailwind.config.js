
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  flowbite.content(),
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "red":"",
        "neutral-07-100": "#141718",
        "neutral-04-100": "#6c7275",
        "neutral-01-100": "#fefefe",
        "neutral-03-100": "#e8ecef",
        
        "neutral-04-50": "rgba(108, 114, 117, 0.5)",
        "neutrals-2": "#23262f",
        black: "#000",
        "neutral-02-100": "#f4f5f7",
        blue: "#377dff",
        darkslategray: {
          "100": "#474a4a",
          "200": "#343839",
        },
        green: "#38cb89",
        mediumseagreen: "#1fb370",
        gainsboro: "#e6e6e6",
        "text-blue": "#3e3e59",
      },
      spacing: {},
      fontFamily: {
        "caption-2-bold": "Poppins",
        "caption-1": "Inter",
        "button-xsmall": "'Space Grotesk'",
      },
      borderRadius: {
        "12xs": "1px",
        "61xl": "80px",
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      xl: "20px",
      "15xl": "34px",
      "8xl": "27px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    // screens: {
    //   'mq1125': '1125px',
    //   'mq1050': '1050px',
    //   'mq750': '750px',
    //   'mq450': '450px',
    //   'mq350': '350px',
    // }
    screens: {
      'xs': '400px',   // New custom breakpoint
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mq500':'500px',
      'mq768':'768px',
      
    },
    
    // screens: {
    //   mq500: {
    //     raw: "screen and (min-width:500px)",
    //   },
    //   mq1040: {
    //     raw: "screen and (max-width: 1040px)",
    //   },
    //   mq1050: {
    //     raw: "screen and (max-width: 1050px)",
    //   },
    //   mq750: {
    //     raw: "screen and (max-width: 750px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    //   mq350:{
    //     raw: "screen and (max-width: 350px)",

    //   },
  //      },
    },
    plugins: [
   
      flowbite.plugin(),
    ],
  corePlugins: {
   
    preflight: false,
  },
}