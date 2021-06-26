const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      teal: colors.teal,
      transparent: "transparent",
      current: "currentColor",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
