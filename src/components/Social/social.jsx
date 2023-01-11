import React from "react";
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {FiFigma} from "react-icons/fi"

const Social = () => {
    return(
        <div className="Social">
            <div className="media">
                <AiFillLinkedin />
                <BsGithub />
                <FiFigma />
            </div>

        </div>
    )
}

export default Social