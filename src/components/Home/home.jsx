import React from "react";
import "../Home/home.css"
import Logo from "../../assets/cannabis-leaf-silhouette-white-background-helm-icon-design-business-logo-design-vector-illustration-cannabis-leaf-silhouette-176255867.jpg" 
import Frame from "../../assets/8735307609_9be9573156_b.jpg"

const Home = () => {
  return (
    <section>
       <div className="circle"></div>
       <header>
           <a href="#" class="logo">
               <img src={Logo} alt="logo" />
           </a>
           <ul>
               <li><a href="#">HOME</a></li>
               <li><a href="#">OFFERS</a></li>
               <li><a href="#">CART</a></li>
               <li><a href="#">CONTACT</a></li>
           </ul>
        </header>
        <div className="content">
       <div className="box">
           <h2>When you smoke herb it reveals <span> you to yourself.</span></h2>
            <p>Aside from these positive impacts on our brains, cannabis can also help heal our bodies.
                Evidence suggests that medical marijuana can help treat chronic pain, insomnia, depression, 
                anxiety, nausea, appetite loss, and other symptoms and disorders. Cannabis use is now 
                more popular than ever as more and more places choose to legalize marijuana.</p>
            <a href="about">What we Offer</a>
            </div>
            <div className="image">
                <img src={Frame} class="bucks" />
            </div>
        </div>
   </section>
  )
}
      
export default Home