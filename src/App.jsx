import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Product } from "./components/product";
import Navbar from "./components/common/Navbar";
import Outdoor from "./components/Outdoor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Product /> */}
      <Outdoor/>
    </>
  );
}

export default App;
