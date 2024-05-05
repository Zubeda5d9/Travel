//reactjs won't delete previous state we can get that value
import React from "react";
class PreviousState extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    handleData=()=>{
        this.setState((prevstate)=>{
            console.log("previous state is: ",prevstate)
            return{count:prevstate.count+1}
        })
    }
    render() {
        console.log("Current state is: ",this.state.count)
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.handleData}>Click me</button>
        </div>
      )
    }
}
export default PreviousState