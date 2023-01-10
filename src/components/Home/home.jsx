import React from "react";
import "../Home/home.css"
import logo from "../../assets/0209de0e4cfad48efa75db6cbe9da37f.jpg"
import Search from "../Search/search";
import Social from "../Social/social";


const Home = () =>{
 return (
    <div className="Home">
        <div className="nav">
       <header>
           <a href="Home" className="logo">
           <img src={logo} alt="company logo" />
           </a>
           <h3>Get a puff, weed will not judge you.</h3>
           <ul>
               <li><a href="Home">HOME</a></li>
               <li><a href="About">ABOUT</a></li>
               <li><a href="Feature">CART</a></li>
               <li><a href="Contact">CONTACT</a></li>
           </ul>
           <h2>When you smoke herb, it reveals you to yourself.</h2>
           <p>Aside from these positive impacts on our brains, cannabis can also help heal our bodies.
                Evidence suggests that medical marijuana can help treat chronic pain, insomnia, depression, 
                anxiety, nausea, appetite loss, and other symptoms and disorders. Cannabis use is now 
                more popular than ever as more and more places choose to legalize marijuana.</p>
           <button type="button">Place Order</button>
           <Search />
           <Social />
        </header>
        </div>
    </div>
 )
}

export default Home