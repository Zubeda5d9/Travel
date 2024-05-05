import React from "react"
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Products from "./Products"
import ProductDetails from "./ProductDetails"
import "./styles.css"
const Router =()=>{
    return(
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Service</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/productdetails">ProductDetails</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}>
                       
                    </Route>
                    <Route exact path="/about" component={About}>
                        
                    </Route>
                    <Route exact path="/services" component={Services}>
                        
                    </Route>
                    <Route exact path="/products" component={Products}>
                        
                    </Route>
                    <Route exact path="/productdetails/:name/:price" component={ProductDetails}>
                        
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router