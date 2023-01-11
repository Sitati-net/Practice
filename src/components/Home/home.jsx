import React from "react";
import "../Home/home.css"
import Search from "../Search/search";
import Social from "../Social/social";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import Typewriter from "typewriter-effect";

const Home = () =>{
 return (
       <header>
       <div className="nav">
       <div style={{ 
      backgroundImage: `url("../../assets/1559186569-marijuana-spongebob-smokingweed-pot-thumb-275x265.jpeg")` 
    }}> Get a puff, 
    <h2><span>weed will not judge you. </span></h2>
       <Link to="/" className="logo">
           </Link>
           <ul>
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/about">ABOUT</Link></li>
               <li><Link to="/feature">FEATURE</Link></li>
               <li><Link to="/contact">CONTACT</Link></li>
           </ul>
           
           <Link className="social" to="/cart" >
            <AiOutlineShoppingCart />
           </Link>
           <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Every night is the perfect night to smoke weed")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Why is marijuana against the law?")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("A friend with weed is a friend indeed, and a friend who shares is a friend who cares.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Whatever I do, I do it better stoned.")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                    }}
                    />
           <h2>When you smoke herb, it reveals you to yourself.</h2>
           <p>Aside from these positive impacts on our brains, cannabis can also help heal our bodies.
                Evidence suggests that medical marijuana can help treat chronic pain, insomnia, depression, 
                anxiety, nausea, appetite loss, and other symptoms and disorders. Cannabis use is now 
                more popular than ever as more and more places choose to legalize marijuana.</p>
           <button type="button">Place Order</button>
           <Search />
           <Social />
           </div>
           </div>
        </header>
        )
      }
      
      export default Home