import "./App.css";
import { Linear } from "./components/Products/Linear";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/common/Home";
import Outdoor from "./components/Products/Outdoor";
import Indoorlights from "./components/Products/Indoorlights";
import { Facade } from "./components/Products/Facade";
import { Indoor338Series } from "./components/IndoorLights/Indoor338Series";
import { IndoorDL228 } from "./components/IndoorLights/IndoorDL228";
import { IndoorPD228 } from "./components/IndoorLights/IndoorPD228";

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Linear />} />
          <Route path="home/products/outdoorlights" element={<Outdoor />} />
          <Route path="home/products/facadelights" element={<Facade />} />
          <Route path="home/products/indoorlights/dl284a" element={<Indoorlights/>}/>
          <Route path="home/products/indoorlights/338-series" element={<Indoor338Series />} />
          <Route path="home/products/indoorlights/dl228a" element={<IndoorDL228 />} />
          <Route path="home/products/indoorlights/pd228" element={<IndoorPD228 />} />
        </Route>
      </Routes>
    </Router>

    
  );
}

export default App;