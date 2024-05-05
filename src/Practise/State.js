//state is an object which holds some data and can change dynamically 
//props holds immutable data
//states holds muttable data
//when state object changes the component re-renders
//we define state in a constructor method and constructor method is in a class component
//to change data intially some data should be present




// import React from "react"
// class State extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Shaik Zubeda Tabassum"
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//             </div>
//         )
//     }
// }
// export default State


//to update or change we have setState()
//change in state occurs when we triggers an event
//setstate()triggers the re-rendering process for the updated component
//react get know which part should update 




// import React from 'react'

// class State extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             name:"Shaik Zubeda Tabassum"
//         }
//     }
//     handleDataChange=()=>{
//         this.setState({name:"Zubeda Tabassum"})
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <button type="button" onClick={this.handleDataChange}>ChangeData</button>
//       </div>
//     )
//   }
// }
// export default State



//we can also change number data 


// import React from 'react'
// class State extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     handleCount=()=>{
//         this.setState({count:this.state.count +1})
//     }

//     render() {
//       return (
//         <div>
//           <h1>{this.state.count}</h1>
//           <button type="button" onClick={this.handleCount}>Click</button>
//         </div>
//       )
//     }
// }
// export default State



//we can also change array data
import React from 'react';
class State extends React.Component{
    constructor(){
        super();
        this.state={
            states:["Andhra Pradesh","Telangana","karnataka","mumbai","madhya pradesh"],
            indexNum:0
        }
    }
    handleStates=()=>{
        this.setState({indexNum:this.state.indexNum+1})
    }
    render() {
      return (
        <div>
          <h1>{this.state.states[this.state.indexNum]}</h1>
          <button type="button" onClick={this.handleStates}>Change State</button>
        </div>
      )
    }
}
export default State;