//without using higher order component


// import React from 'react'
// class Hoverme extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     handledata=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     render() {
//       return (
//         <div>
//           <h1>count is: {this.state.count}</h1>
//           <button type="button" onMouseOver={this.handledata}>Hoverme</button>
//         </div>
//       )
//     }
// }
// export default Hoverme




import React from 'react'
import Higherordercomponent from './Higherordercomponents'
class Hoverme extends React.Component{

    render() {
      return (
        <div>
          <h1>count is: {this.props.count}</h1>
          <button type="button" onMouseOver={this.props.incCount}>Hoverme</button>
          
        </div>
      )
    }
}
export default Higherordercomponent(Hoverme)b