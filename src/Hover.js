//this method is known as the logic is written in the same component
// import React from "react"
// class Hover extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0,
//         }
//     }
//     handleHoverChange=() => {
//         this.setState({count:this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Counter is: {this.state.count}</h1>
//                 <button type="button" onMouseOver={this.handleHoverChange}>Hover Me</button>
//             </div>
//         )
//     }
// }
// export default Hover



//higher order component
import React from"react";
import CounterLogic from "./CounterLogic";
class Hover extends React.Component{
    render(){
        return(
            <div>
                <h2>Counter is: {this.props.count}</h2>
                <button type="button" onMouseOver={this.props.incCount}>Hover Me</button>
            </div>
        )
    }
}
export default CounterLogic(Hover);