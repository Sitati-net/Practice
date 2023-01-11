import React from "react";
import "../Home/home.css"
import logo from "../../assets/0209de0e4cfad48efa75db6cbe9da37f.jpg"
import Search from "../Search/search";
import Social from "../Social/social";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Home = () =>{
 return (
    <div className="Home">
       <header>
       <div className="nav">
       <Link to="/" className="logo">
           <img src={logo} alt="company logo" />
           </Link>
           <h3>Get a puff, weed will not judge you.</h3>
           <div className="soc">
           <ul>
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/about">ABOUT</Link></li>
               <li><Link to="/feature">CART</Link></li>
               <li><Link to="/contact">CONTACT</Link></li>
           </ul>
           </div>
           <Link to="/cart" >
            <AiOutlineShoppingCart />
           </Link>
           </div>
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

 )
}

export default Home