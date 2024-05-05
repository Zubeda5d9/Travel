import React, {useState} from "react";
const Textbox=()=>{
    const[data,setData]=useState("");
    const handleNameChange=(event)=>{
        setData(event.target.value);
    }
    return(
        <div>
            <input type="text" onChange={handleNameChange} name={data}></input>
        </div>
    )
}
export default Textbox;