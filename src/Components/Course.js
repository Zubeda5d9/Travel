// function Course(){
//     return <h1>Welcome to the function component</h1>
// }
// export default Course;

//arrow function
// const Course=()=>{
//     return<h1>This is a Arrow function</h1>

// }
// export default Course;

//anonymous function
import './effects.css';
const Course=function(props){
    return (
        <div className="Course">
            <h1>{props.name}</h1>
            <h3>{props.trainer}</h3>
            <img src={props.preview}/>
        </div>
    )
}
export default Course;