import React from "react";
import Course from "./Course";
import Html from"./HTML.png";
import Css from"./Css.png";

class Data extends React.Component{
    render(){
        return(
            <div>
                <Course name="Html"
                 trainer="Dilip"
                 preview={Html}>
                </Course> 
                <Course name="CSS"
                 trainer="Jhon"
                 preview={Css}>
                </Course> 
            </div>
        )
    }
}

export default Data;

//Default props
// import React from "react";
// class Data extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>This is a default prop</h1>
//                 <p>{this.props.name}</p>
//             </div>

//         )
//     }
// }
// Data.defaultProps={
//     name:"This is an example of default prop"
// }

// export default Data;


