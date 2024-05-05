// import React from "react";
// class Number extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             num:0
//         }
//     }
//     UpdateNumber=()=>{
//         //this is used to increment from 0 to 1
//         this.setState({num:0+1})

//         //this is used to increment from 0 to 1 to 2.......
//         this.setState({num:this.state.num+1})

//         //this method is used to get previous number
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.num}</h1>
//                 <button type="button" onClick={this.UpdateNumber}>
//                     Change Num
//                 </button>
//             </div>
//         )
//     }
// }
// export default Number;




import React from "react";

class Counter extends React.Component{

    constructor(){
        super();

        this.state = {
            counter : 0
        }
    }


    handleDataChange = () => {
        this.setState((prevState) => {
            console.log("Previous State Values is : ",prevState);
            return {counter : prevState.counter + 1}
        })
    }
    

    render(){
        console.log("Current State Value is : ",this.state.counter);
        return(
            <div>
               <h1>{this.state.counter}</h1>
               <button type="button" onClick={this.handleDataChange}>
                   Click to Change
               </button>
            </div>
        )
    }
}

export default Counter;

