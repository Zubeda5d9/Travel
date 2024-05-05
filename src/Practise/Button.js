//logic return in the same component


// import React from 'react'
// class Button extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     handleData=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     render() {
//       return (
//         <div>
//           <h1>count is: {this.state.count}</h1>
//           <button type='button' onClick={this.handleData}>Click me</button>
//         </div>
//       )
//     }
// }
// export default Button



//using hoc
import React from 'react'
import Higherordercomponent from './Higherordercomponents'
class Button extends React.Component{

    render() {
      return (
        <div>
          <h1>count is: {this.props.count}</h1>
          <button type='button' onClick={this.props.incCount}>Click me</button>
          
        </div>
      )
    }
}
export default Higherordercomponent(Button)         