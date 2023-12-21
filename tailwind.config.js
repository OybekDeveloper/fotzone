/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        club_color: "rgb(24,24,24)",
        hover_club_color:"#333333",
        background:'#111111',
        main_color: "#8F00FF",
        secondary: "#ffed4a",
        accent: "#ff6384",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".shadow-border": {
          border: "1px solid #222222",
          "border-radius": "5px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
