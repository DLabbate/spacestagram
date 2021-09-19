module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme("colors.red.500"),
        grey: theme("colors.gray.100"),
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      padding: {
        "1/2": "50%",
        "3/4": "75%",
        "1/1": "100%",
        "5/4": "125%",
        "3/2": "150%",
        "2/1": "200%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
