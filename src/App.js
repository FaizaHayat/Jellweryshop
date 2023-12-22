import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter as Router
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <Navbar />
       
      </div>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Footer/> 
    </Router>
  );
}

export default App;