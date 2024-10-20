/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "mobile-sidebar": "url('/public/bg-sidebar-mobile.svg')",
        "desktop-sidebar": "url('/public/bg-sidebar-desktop.svg')",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
