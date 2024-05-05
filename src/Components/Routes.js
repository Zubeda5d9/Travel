// import React from "react";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// const Routes =()=>{
//     return(
//         <div>
//             <h1>Welcome to react route</h1>
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/about">
//                         <About></About>
//                     </Route>
//                     <Route path="/">
//                         <Home></Home>
//                     </Route>
                    
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     )
// }
// export default Routes;







//to stop reloading the page we use link component 
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import "./effects.css";
const Routes =()=>{
    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
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
//this is one type
                    <Route path='/services'>
                        <Services></Services>
                    </Route>
                    <Route exact path="/product" component={Product}></Route>
                    //this is used for specified number of properties
                    {/* <Route exact path="/productdetails/:name/:price" component={ProductDetails}></Route> */}
                    //this is used for huge data
                    <Route exact path="/productdetails/:data" component={ProductDetails}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Routes;