/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        Black: "#000000",
        veryDarkGray: "#111111",
        dimGray: "#6b6b6b",
        blueViolet: "#664efc",
        mediumPurple: "#4c42fb",
      },

      gridTemplateColumns: {
        custom: "2fr 1fr",
      },
    },
  },
  plugins: [],
};
