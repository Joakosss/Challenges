import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SumaryComponent } from "./components/SumaryComponent/SumaryComponet";
import { BlogCard } from "./components/BlogCard/index";
import Botonera from "./components/Botonera/Botonera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Botonera />}></Route>
        <Route path="/blog-ard" element={<BlogCard />}></Route>
        <Route path="/sumary-component" element={<SumaryComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
