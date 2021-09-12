module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme("colors.red.500"),
        grey: theme("colors.gray.100"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
