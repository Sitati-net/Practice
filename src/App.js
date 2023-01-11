import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css"
import About from "./components/About/about";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";



const App = () => {
  
  return (
    <div>
      <Router>
      <Home />
      <About />
      <Contact />
      <Footer />
      </Router>
    </div>
  )
}

export default App