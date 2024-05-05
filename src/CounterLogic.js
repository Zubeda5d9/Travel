import React from "react";
const CounterLogic =(Originalcomponent)=>{
    class Newcomponent extends React.Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
        handleDataChange=()=>{
            //this method is used to show the prevstate also
            this.setState((prevState)=>{
                console.log("previous state value is: ",prevState)
                return({count:prevState.count+1})
            })
            //this is a normal method to update the count
            this.setState({count:this.state.count+1})
        }
        render(){
            return(
                <div>
                    <Originalcomponent count={this.state.count} incCount={this.handleDataChange}></Originalcomponent>
                </div>
            )
        }
    } 
    return Newcomponent;
}
export default CounterLogic