import React from "react";
import "../Home/home.css"
import logo from "../../assets/0209de0e4cfad48efa75db6cbe9da37f.jpg"

const Home = () =>{
 return (
    <div className="Home">
        <div className="nav">
       <header>
           <a href="Home" className="logo">
           <img src={logo} alt="company logo" />
           </a>
           <h1>Get a puff, weed will not judge you.</h1>
           <ul>
               <li><a href="Home">HOME</a></li>
               <li><a href="About">ABOUT</a></li>
               <li><a href="Feature">CART</a></li>
               <li><a href="Contact">CONTACT</a></li>
           </ul>
        </header>
        </div>
    </div>
 )
}

export default Home