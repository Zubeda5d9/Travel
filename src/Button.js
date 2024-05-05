//this method is a normal method in which the logic also written in the same component
// import React from "react"

// class Button extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0,
//         }
//     }
//     handleCount= () => {
//         this.setState({count:this.state.count+1})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Counter is: {this.state.count}</h1>
//                 <button type="button" onClick={this.handleCount}>Click me</button>
//             </div>
//         )
//     }
// }
// export default Button



//higher order component
import React from "react";
import CounterLogic from "./CounterLogic";
class Button extends React.Component{
    render(){
        return(
            <div>
                <h2>Counter is: {this.props.count}</h2>
                <button type="button" onClick={this.props.incCount}>Click Me</button>
            </div>
            
        )
    }
}
export default CounterLogic(Button);
