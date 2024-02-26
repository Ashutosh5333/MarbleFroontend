const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
