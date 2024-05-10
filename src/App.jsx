import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";
import { Product } from "./components/IndoorLights/Product";
import { Linear } from "./components/Products/Linear";
import { MoreProducts } from "./components/common/MoreProducts";
import Productlist from "./components/common/Productlist";
import Homepage from "./components/home/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Linear />} />
          <Route path="home/products/individual/:productname/:id" element={<Product />} />
          <Route
            path="home/products/:name/:productCategory"
            element={<MoreProducts />}
          />
          <Route
            path="home/products/allproduct/:pname/:productname"
            element={<Productlist />}
          />
          <Route path="/homePage" element={<Homepage />}/>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
