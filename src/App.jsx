import "./App.css";
import { Product } from "./components/product";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<Product/>}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
