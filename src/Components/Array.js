import React from "react";
class Array extends React.Component{
    constructor(){
        super()
        this.state={
            marks:[100,78,90,98,78,89],
            indexNum:0
        }
    }
    UpdateMarks=()=>{
        this.setState({indexNum:this.state.indexNum+1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.marks[this.state.indexNum]}</h1>
                <button type="button" onClick={this.UpdateMarks}>
                    Update Marks
                </button>
            </div>
        )
    }
}
export default Array;