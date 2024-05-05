import React from "react";
import axios from "axios";
class Postcall extends React.Component{
    constructor(){
        super();
        this.state={
            userId:"",
            title:"",
            body:""
        }
    }
    handleData=(event)=>{
        this.setState({[event.target.name]:[event.target.value]})
    }
    postData=(event)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
          .then((response)=>{
            console.log(response)
          })
          .catch((error)=>{
            console.log(error)
          })
        event.preventDefault();
    }
   render() {
    const{userId,title,body}=this.state;//object destruction
     return (
       <div>
         <h1> welcome to the http postcall</h1>
         <form>
            <label>Enter userId: </label>
            <input type="text" value={userId} name="userId" onChange={this.handleData}></input><br/>
            <label>Enter title: </label>
            <input type="text" value={title} name="title" onChange={this.handleData}></input><br/>
            <label>Enter body: </label>
            <input type="text" value={body} name="body" onChange={this.handleData}></input><br/>
            <button type="submit" onClick={this.postData}>Post</button>
         </form>
       </div>
     )
   } 
}
export default Postcall;




// import React from "react";
// import axios from "axios";


// class Postcall extends React.Component{

//     constructor(){
//         super();

//         this.state = {
//             userId : "",
//             title : "",
//             body : ""
//         }
//     }

//     handleData = (event) => {
//         this.setState({[event.target.name] : [event.target.value]})
//     }

//     postData = (event) => {
//        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
//        .then((response) => {
//            console.log(response)
//        })
//        .catch((error) => {
//             console.log(error);
//        })
//        event.preventDefault();
//     }

//     render(){

//         const {userId,title,body} = this.state;
        
//         return(
//             <div>
//                 <h1>React Post Call</h1>
//                 <form>
//                     <label>Enter userId : </label>
//                     <input type="text" value={userId} name="userId" onChange={this.handleData}/><br/><br/>
//                     <label>Enter title : </label>
//                     <input type="text" value={title} name="title" onChange={this.handleData}/><br/><br/>
//                     <label>Enter body : </label>
//                     <input type="text" value={body} name="body" onChange={this.handleData}/><br/><br/>
//                     <button type="submit" onClick={this.postData}>Post</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Postcall;

