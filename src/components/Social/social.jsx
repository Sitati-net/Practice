import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {FiFigma} from "react-icons/fi"

const Social = () => {
    return(
        <div className="Social">
            <div className="cart">
                <AiOutlineShoppingCart />
            </div>
            <div className="media">
                <AiFillLinkedin />
                <BsGithub />
                <FiFigma />
            </div>

        </div>
    )
}

export default Social