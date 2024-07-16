/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Formbg: "url('/bgImage.png')",
        Bannerbg: "url('/bannerbg.png')",
        moreproductsbg: "url('/moreproductsbg.jpg')",
        banner:"url('/banner1.jpg')",
        about:"url('/auras (1).gif')",
        form:"url('/Rectangle 57.png')",
        contactusbg:"url('/src/assets/contact.png')"
      },
      screens:{
        xs:"428px",
        xss:"400px",
        previewxs:"404px",
        lg1:"1100px",
        lg2:"1250px",
      },
      colors:{
        primaryColor:"#F2667C",
      }
    },
  },
  plugins: [],
};
