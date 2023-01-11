import React from "react";
import data from "./components/Data/data"
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css"
import About from "./components/About/about";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";
import Feature from "./components/Feature/feature";
import Routes from "./components/Routes/routes";

const App = () => {
  const {productItems} = data;
  return (
    <div>
      <Router>
      <Home />
      <About />
      <Routes productItems={productItems}/>
      <Contact />
      <Footer />
      </Router>
    </div>
  )
}

export default App