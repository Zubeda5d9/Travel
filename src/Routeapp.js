import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./About";
const Reactapp =()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                </Switch>
            </BrowserRouter>        
        </div>
    )
}
export default Reactapp;



// import React from "react";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./About";


// const Routeapp = () => {
//     return(
//         <div>
//             <h1>Welcome to React Routes</h1>

//             <BrowserRouter>
//                 <Switch>
//                    <Route path="/about">
//                       <About></About>
//                    </Route>
//                    <Route path="/">
//                       <Home></Home>
//                    </Route>
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default Routeapp;