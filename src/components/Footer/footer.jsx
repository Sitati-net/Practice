import React from "react";
import "./footer.css"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {SiSlack} from "react-icons/si"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Footer = ( ) => {
    return (
        <footer>
        <a href="Home" className="logo"><BsFillArrowUpCircleFill /></a>
        <div className="soshi">
                <a href="https://instagram.com"><FaInstagramSquare /></a>
                <a href="https://github.com"><FaGithubSquare /></a>
                <a href="https://slack.com"><SiSlack /></a>
        </div>

        <div className="copyright">
            <small>&copy; Created by <span> KEMUNTO.</span> All rights reserved</small>
        </div>
        </footer>
    )
}

export default Footer