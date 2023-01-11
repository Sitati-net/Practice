import React from "react";

const Feature = ({productItem}) => {
    return(
        <div className="weed">
            <h2>Great weed you can find today</h2>
            {productItem.map((productItems) => {
                <div className="card">
                    <img className="picture" src={productItems.image} alt={productItems.name} />
                    </div>
            })}
            <img src="" alt="deal" />

        </div>
    )
}

export default Feature