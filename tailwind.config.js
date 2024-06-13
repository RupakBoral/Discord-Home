/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        paytone: ["Paytone One", "sans-serif"],
        Ggsans: ["Archivo", "sans-serif"],
        braah : ["Braah One", "sans-serif"],
        abcginto : ["Braah One", "sans-serif"],
      },
      colors:{
        gray: "#6b7280",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        purpleBg: "#404eed",
        offwhite: "f6f6f6",
        grayBlack: "#23272a",
        purple: "#5865f2"
      }
    },
  },
  plugins: [],
}

