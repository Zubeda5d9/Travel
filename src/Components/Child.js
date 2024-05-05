//this is example without using context Api
// import React from "react"
// import child from "./child.jpg"
// import "./effects.css"
// class Child extends React.Component{
//     render(){
//         return(
//             <div className="Child">
//                 <h1>I am Child</h1>
//                 <h3>I am playing in a {this.props.cproperty}</h3>
//                 <img src={child}></img>
//             </div>
//         )
//     }
// }
// export default Child


//this example is using context api
import React from "react"
import child from "./child.jpg"
import "./effects.css"
import { Context } from "./Grandfather"
class Child extends React.Component{
    render(){
        return(
            <div className="Child">
                <h1>I am Child</h1>
                <img src={child}></img>
                
                <Context.Consumer>
                    {
                        (data)=>{
                            return(
                                <div>
                                    <h1>My House Number is: {data.Houseno}</h1>
                                    <h1>My House City is: {data.City}</h1>
                                    <h1>My House State is: {data.State}</h1>                                    
                                </div>
                            )
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
export default Child




