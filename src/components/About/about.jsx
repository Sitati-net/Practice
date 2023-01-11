import React from "react";
import "../About/about.css"
import one from "../../assets/one.jpeg"
import two from "../../assets/two.png"
import three from "../../assets/three.jpg"

const About = () =>{
    return(
        <div className="about">
        <div className="company">
            <h1>Here's a deal worth your attention</h1>
            <p>Aside from these positive impacts on our brains, 
                cannabis can also help heal our bodies. 
                Evidence suggests that medical marijuana 
                can help treat chronic pain, insomnia, depression, 
                anxiety, nausea, appetite loss, and other symptoms and disorders. 
                Cannabis use is now more popular than ever as more and more places 
                choose to legalize marijuana.</p>
        </div>
        <div className="icon">
        <div className="book">
                <div className="image">
                <img src={one} alt="cover" />
                </div>
                <div className="title">
                <h2>Weed makes you happy</h2>
                </div>
                <div className="off">
                    <h3>10% off</h3>
                    <a href="about">Place Order</a>
                      </div>
                  </div>
                  <div className="book">
                <div className="image">
                <img src={one} alt="cover" />
                </div>
                <div className="title">
                 <h2>Weed makes you happy</h2>
                </div>
                <div className="off">
                    <h3>25% off</h3>
                    <a href="about">Place Order</a>
                      </div>
                  </div>
               
    </div>
    </div>
    )
}

export default About