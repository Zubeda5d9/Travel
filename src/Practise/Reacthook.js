//reacthook is a special function in which we can take only in afunctional component
//reacthook is introduced in the version 16.8 
//reacthook allows the creation of a stateful variable in the functional component
//we use useState() to create a reacthook in functional component
//two most important points we need to know about reacthook is:
    //1-reacthook is always works in a function component
    //2-dont use reacthook in a loop,condition statements
//we need to import an usestate in react library 
//syntax
    //const[data,setdata]=usestate("value")
//to update or change data
    //onClick={()=>setdata("updatedvalue")}

// import React, {useState} from "react";
// const Reacthook=()=>{
//     const[name,setName]=useState("Zubeda");
//     return(
//         <div>
//             <h1>Name is: {name}</h1>
//             <button type="button" onClick={()=>setName("Zubeda Tabassum")}>Change</button>
//         </div>
//     )
// }
// export default Reacthook;


//taking multiple usestates


// import React,{useState} from "react";
// const Reacthook=()=>{
//     const [name,setName]=useState("Zubeda Tabassum");
//     const[age,setAge]=useState(20);
//     return(
//         <div>
//             <h1>Name is: {name}</h1>
//             <h2>Age is: {age}</h2>
//             <button type="button" onClick={()=>setName("Shaik Zubeda Tabassum")}> Change</button>
            
//         </div>
//     )
// }
// export default Reacthook


//we can use counter

// import React, {useState} from 'react'
// const Reacthook =()=>{
//     const[count,setCount]=useState(0);
//     return(
//         <div>
//             <h1>count is: {count}</h1>
//             <button type="button" onClick={()=>setCount(count+1)}>change</button>
//         </div>
//     )
// }
// export default Reacthook

//increment and decrement
import React, {useState} from 'react'
const Reacthook =()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            
            <button type="button" onClick={()=>setCount(count+1)}>+</button>
            &nbsp;&nbsp;<span>{count}</span>&nbsp;&nbsp;
            <button type="button" onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}
export default Reacthook