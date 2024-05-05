//use function component by using usestate hook


//initially create one textbox
// import React,{useState} from "react";
// const Textbox =()=>{
//     const[value,setValue]=useState("");
//     return(
//         <div>
//             <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}></input>
//             <h1>Value is: {value}</h1>
//         </div>
//     )
// }
// export default Textbox;


//lets create a form 

// import React from 'react'
// class Formhandling extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             Name:"",
//             Email:"",
//             Mobileno:""
//         }
//     }
//     handleNameChange=(event)=>{
//         this.setState({Name: event.target.value})
//     }
//     handleEmailChange=(event)=>{
//         this.setState({Email:event.target.value})
//     }
//     handleMobileChange=(event)=>{
//         this.setState({Mobileno:event.target.value})
//     }
//     handleSubmitData=(event)=>{
//         alert(`
//         Name is: ${this.state.Name}
//         Email is: ${this.state.Email}
//         Mobileno is: ${this.state.Mobileno}`)
    
//         event.preventDefault();
//     }
//     render(){
//         const{Name,Email,Mobileno}=this.state;
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmitData}>
//                     <label>Enter your Name: </label>
//                     <input type="text" value={Name} onChange={this.handleNameChange}></input><br/><br/>
//                     <label>Enter your Email: </label>
//                     <input type="email" value={Email}onChange={this.handleEmailChange}></input><br/><br/>
//                     <label>Enter your Monbileno: </label>
//                     <input type="tel" value={Mobileno} onChange={this.handleMobileChange}></input><br/><br/>
//                     <button type='submit'>Submit</button>
//                 </form>

//             </div>
//         )
//     }
// }
// export default Formhandling



//form handling with functional component


import React, {useState} from "react";
const Formhandling =()=>{
    const[Formdata,setFormdata]=useState({
        Name:"",
        Email:"",
        Mobileno:"",
        Gender:"",
        Skills:[]
    })
    const handleDataChange=(event)=>{
        // console.log(event)
        if(event.target.name==="skills"){
            let copy={...Formdata}
            if(event.target.checked){
                copy.Skills.push(event.target.value)
            }else{
               copy.Skills= copy.Skills.filter(el=>el!= event.target.value)
            }
            setFormdata(copy)
        }else{
            setFormdata(()=>({
                ...Formdata,
                [event.target.name]: event.target.value
            }))
        }
        
    }
    
    return(
        <div>
            <form>
                <label>Enter Your Name: </label>
                <input type="text" name="name" onChange={handleDataChange}></input><br/><br/>
                <label>Enter Your Email: </label>
                <input type="text" name="email" onChange={handleDataChange}></input><br/><br/>
                <label>Enter Your Mobileno: </label>
                <input type="text" name="mobileno" onChange={handleDataChange}></input><br/><br/>
                <label>Select Your Gender: </label>
                <input type="radio" name="gender" value="Male" onChange={handleDataChange}></input><label>Male</label>
                <input type="radio" name="gender" value="FeMale" onChange={handleDataChange}></input><label>FeMale</label>
                <input type="radio" name="gender" value="Others" onChange={handleDataChange}></input><label>Others</label><br/><br/>
                <label>Select Your Skills: </label>
                <input type="checkbox" name="skills" value="Html" onChange={handleDataChange}></input><label>Html</label>
                <input type="checkbox" name="skills" value="Css" onChange={handleDataChange}></input><label>Css</label>
                <input type="checkbox" name="skills" value="Bootstrap" onChange={handleDataChange}></input><label>Bootstrap</label>
                <input type="checkbox" name="skills" value="Javascript" onChange={handleDataChange}></input><label>Javascript</label>
                <input type="checkbox" name="skills" value="ReactJs" onChange={handleDataChange}></input><label>ReactJs</label><br/><br/>
                <button type="button" onClick={()=>console.log(Formdata)}>Submit</button>
            </form>
        </div>
    )
}
export default Formhandling