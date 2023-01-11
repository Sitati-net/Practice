import React from "react";
import Feature from "../Feature/feature";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = ({productItems} ) => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" />
                    <Feature productItems={productItems}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routes