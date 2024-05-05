//without using context api
// import React from "react";
// import father from "./parent.jpg"
// import Child from "./Child"
// class Father extends React.Component{
//     render(){
//         return(
//             <div className="Father">
//                 <h1>I am Father</h1>
//                 <h3> I live in a {this.props.property}</h3>
//                 <img src={father} width="300" height="300"></img>
//                 <Child cproperty={this.props.property}></Child>
//             </div>
//         )
//     }
// }
// export default Father




//using context api
import React from "react";
import father from "./parent.jpg"
import Child from "./Child"
class Father extends React.Component{
    render(){
        return(
            <div className="Father">
                <h1>I am Father</h1>
                <img src={father} width="300" height="300"></img>
                <Child></Child>
                
            </div>
        )
    }
}
export default Father