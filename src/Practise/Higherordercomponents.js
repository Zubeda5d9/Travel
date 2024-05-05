//in this we can use one component logic into another
//A higher order component is a function component 

//component with the logic
import React from 'react'
const Higherordercomponent =(Component)=>{
    class Newcomponent extends React.Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
        handleChangeData=()=>{
            this.setState({count:this.state.count+1})
        }
        render() {
            return (
              <div>
                <Component count={this.state.count} incCount={this.handleChangeData}></Component>
              </div>
            )
          }
       
    }
    return Newcomponent
}
export default Higherordercomponent
