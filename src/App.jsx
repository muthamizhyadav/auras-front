import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";
import { Product } from "./components/IndoorLights/Product";
import { Linear } from "./components/Products/Linear";
import { MoreProducts } from "./components/common/MoreProducts";
import Productlist from "./components/common/Productlist";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Contactus from "./components/contactus/Contactus";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="home/products/individual/:productname/:id" element={<Product />} />
          <Route
            path="home/products/:name/:productCategory"
            element={<MoreProducts />}
          />
          <Route
            path="home/products/allproduct/:pname/:productname"
            element={<Productlist />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus/>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
