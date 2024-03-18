/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Formbg: "url('/bgImage.png')",
        Bannerbg: "url('/bannerbg.png')",
      },
      screens:{
        xs:"428px",
        previewxs:"404px"
      },
    },
  },
  plugins: [],
};
