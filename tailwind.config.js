/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        Alabaster: "#fdfcf9 ",
        Black: "#000000",
        veryDarkGray: "#111111",
        lightGray: "#555555",
        dimGray: "#6b6b6b",
        blueViolet: "#664efc",
        mediumPurple: "#4c42fb",
        lightSlateBlue: "#826fff",
      },

      gridTemplateColumns: {
        custom: "1fr 1fr",
      },
    },
  },
  plugins: [],
};
