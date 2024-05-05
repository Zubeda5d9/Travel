// function Propsinfunctionalcomponent(props){
//     return(
//         <div>
//             <h1>Passing props in an functional component</h1>
//             <i>{props.name}</i>
//         </div>
//     )

// }
// export default Propsinfunctionalcomponent;



//default props in functional
// function Propsinfunctionalcomponent(props){
//     return(
//         <div>
//             <h1>Default props in functional component</h1>
//             <b>{props.title}</b>
//         </div>
//     )
// }
// Propsinfunctionalcomponent.defaultProps={
//     title:"Default Props"
// }
// export default Propsinfunctionalcomponent


//passing and accessing more props in a component
// import "./styles.css"
// function Propsinfunctionalcomponent(props){
//     return(
//         <div className="Propsinfunctionalcomponent">
//             <h1>Accessing more props in a component</h1>
//             <h3>{props.Name}</h3>
//             <img src={props.preview} width="400" height="300"></img>
//             <h3>{props.trainer}</h3>
//         </div>
//     )
// }
// export default Propsinfunctionalcomponent


//passing props in a class component and accessing in a function component

import "./styles.css"
const Propsinfunctionalcomponent=function(props){
    return(
        <div className="Propsinfunctionalcomponent">
            <h1>Accessing more props in a component</h1>
            <h3>{props.name}</h3>
            <img src={props.preview} width="400" height="300"></img>
            <h3>{props.trainer}</h3>

        </div>
    )
}
export  default Propsinfunctionalcomponent