import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./Project/Header"
import Home from "./Project/Home"
import Footer from "./Project/Footer"
import Checkout from "./Project/Checkout";
const Router =()=>{
    return(
        <div>
            <BrowserRouter>
                <Header>
                    {/* <Link to="/" className="text-decoration-none d-flex">
                        <i className='bi bi-shop-window text-warning fs-3 me-2'></i>
                        <a className="navbar-brand" href="#">Shopping</a>
                    </Link>
                    <Link className="nav-link active d-flex" to="/checkout">
                        <i className='bi bi-cart text-white me-1'></i>
                        <span>0</span>
                    </Link> */}
                </Header>
                <Switch>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/checkout">
                        <Checkout></Checkout>
                    </Route>
                </Switch>
                    <Footer>
                        
                    </Footer>
            </BrowserRouter>
        </div>
    )
}
export default Router