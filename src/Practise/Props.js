//props is an object which stores the value attribute of a tag and works similar to the html attributes
//props are used to share data from one component to another component
//props are immutable
//props are just like pure functions which means we cannot change any data in the pure function so we can also cannot change the data in the props
//props can pass to any component like class and function
//syntax
//<Component_name propname1="value".....></Component_name>
//example
//<Props name="Properties"></Props>
//syntax
//this.props.propname
//passing props in class component
// import React from 'react'
// class Props extends React.Component{
//     render() {
//       return (
//         <div>
//           <h1>Welcome to the class component props</h1>
//           <q>{this.props.defnition}</q>
//         </div>
//       )
//     }
// }
// export default Props;


//default props 
import React from 'react'
class Props extends React.Component{
    render(){
        return(
            <div>
                <h1>This is a default props</h1>
                <i>{this.props.data}</i>
            </div>
        )
    }
}
Props.defaultProps={
    data:"This is an example of default props" 
}
export default Props;