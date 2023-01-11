import React from "react";
import {Route, Switch} from "react-router-dom"
import Feature from "../Feature/feature";

const Routes = ({productItems} ) => {
    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <Feature productItems={productItems}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes