import effects from './effects.css'

function Functionprops(props){
    return(
        <div className="Functionprops">
            <h1>This is a function prop</h1>
            <h2>{props.name}</h2>
            <h3>{props.trainer}</h3>
            <img src={props.preview} width="500px" height="400px" />


        </div>
    )
}
export default Functionprops;