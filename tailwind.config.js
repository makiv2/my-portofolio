/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10p': "10%",
        '14p': "14%",
        '14.3p': "14.3%",
        '14.5p': "14.5%",
        '15p': "15%",
        '20p': "20%",
        '30p': "30%",
        '40p': "40%",
        '50p': "50%",
        '60p': "60%",
        '70p': "70%",
        '80p': "80%",
        '85.7p': "85.7%",
        '90p': "90%",
        '100p': "100%",
      },
      fontFamily: {
        luckiest: "Luckiest Guy",
        rocksalt: "Rock Salt",
        specialelite: "Special Elite",
        rowdies: "Rowdies",
      },
      colors: {
        custom: {
          first: "#243763",
          firstHoved: "#1c2d4a",
          second: "#FF6E31",
          third: "#FFEBB7",
          fourth: "#AD8E70",
          fifth: "#424242",
          background: "rgba(52,51,47)",
          text: "#252525",
        },
      },
    },
    plugins: [],
  },
};
