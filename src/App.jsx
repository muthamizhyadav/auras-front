import "./App.css";
import { Linear } from "./components/Products/Linear";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";
import Outdoor from "./components/Products/Outdoor";
import Indoorlights from "./components/Products/Indoorlights";

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Linear />} />
          <Route path="/products/outdoorlights" element={<Outdoor />} />
          <Route path="/products/indoorlights" element={<Indoorlights/>}/>
        </Route>
      </Routes>
    </Router>

    
  );
}

export default App;