import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Home";



const Routeapp = () => {
    return(
        <div>
            <h1>Welcome to React Routes</h1>

            <BrowserRouter>
                <Switch>
                   {/* <Route path="/about">
                      <About></About>
                   </Route> */}
                   <Route path="/">
                      <Home></Home>
                   </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routeapp;