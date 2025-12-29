import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar.jsx";
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";
import Events from "./pages/Events.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
