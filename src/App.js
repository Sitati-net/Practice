import React from "react";
import "./App.css"
import About from "./components/About/about";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";
import Feature from "./components/Feature/feature";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Feature />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App