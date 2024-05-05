// import React from "react";
// class Locations extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             Hyderabad:"Charminar",
//             Delhi:"Red fort"
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.Delhi}</h1>
//             </div>
//         )
//     }
// }
// export default Locations;

//update the state value
import React from "react";
class Locations extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Zubeda"
        }
    }
    UpdateName=()=>{
        this.setState({name:"Zubeda Tabassum Shaik"})
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button type="button" onClick={this.UpdateName}>
                    Change
                </button>
            </div>
        )
    }
}
export default Locations;