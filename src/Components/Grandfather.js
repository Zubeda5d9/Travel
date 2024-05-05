//this is example without using context Api
// import React from "react";
// import Grandpa from "./grandpa.jpg"
// import "./effects.css"
// import Father from "./Father"
// class Grandfather extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             value:"Happy Home"

//         }
//     }
//     render(){
//         return(
//             <div className="Grandfather">
//                 <h1>I am grandfather</h1>
//                 <img src={Grandpa} width="300"height="300"></img>
//                 <h3>I have {this.state.value}</h3>
//                 <Father property={this.state.value}></Father>
//             </div>
//         )
//     }
// }
// export default Grandfather


// this is using context api
import React from "react";
import Grandpa from"./grandpa.jpg"
import "./effects.css"
import Child from "./Child"

export const Context =React.createContext();
class Grandfather extends React.Component{
    constructor(){
        super()
        this.state={
            address:{
                Houseno:75,
                City:"Guntur",
                State:"Andhra Pradesh"
            }

        }
    }
    render(){
        return(
            <div className="Grandfather">
                <h1>I am Grandfather</h1>
                <img src={Grandpa} width="300" height="300"></img>
                <h3>My House Number is: {this.state.address.Houseno}</h3>
                <h3>I living in the: {this.state.address.City} city</h3>
                <h3>State is: {this.state.address.State} state</h3>
                <Context.Provider value={this.state.address}>
                    <Child></Child>
                </Context.Provider>
                
            </div>
        )
    }
}
export default Grandfather



