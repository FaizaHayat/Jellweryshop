import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter as Router
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <Navbar />
        <Slider />
      </div>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Contact" element={<Contact/>} />
    </Routes>
      
    </Router>
  );
}

export default App;