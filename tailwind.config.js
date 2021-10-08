module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "360px",
      // => @media (min-width: 768px) { ... }

      md2: "660",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // Headers: {

      // }
      colors: {
        primary: "#FCED3D",
        buttonEnable:
          "px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-blue-700",
        buttonDisable:
          "px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 bg-red-600) focus:outline-none focus:ring-2 focus:ring-red-700",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
