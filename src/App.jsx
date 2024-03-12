import "./App.css";
import { Product } from "./components/Products/Linear";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";
import Outdoor from "./components/Products/Outdoor";

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Product />} />
          <Route path="/products/outdoorlights" element={<Outdoor />} />
        </Route>
      </Routes>
    </Router>

    
  );
}

export default App;