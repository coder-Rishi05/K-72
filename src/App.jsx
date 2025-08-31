import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agency from "./pages/Agency";
import Navbar from "./Navigation/Navbar";
import FullScreen from "./Navigation/FullScreen";

const App = () => {
  return (
    <div>
      <Navbar /> 
      <FullScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </div>
  );
};

export default App;
