//this is normal method in which we gave event to the button
// import React from "react";
// import axios from 'axios';
// class Getcall extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             userId:[],
//             title:[],
//             body:[]
//         }
//     }
//     handleAPIData=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((response)=>{
//                 console.log(response.data);
//                 this.setState({
//                     title:response.data,
//                     body:response.data,
//                     userId:response.data
//                 })
//             })
//             .catch((error)=>{
//                 console.log(error)
//             })
//     }
//     render(){
//         const{title,body,userId}=this.state;
//         return(
//             <div>
//                 <h1>Welcome to the react API  get calls</h1>
//                 <button type="button" onClick={this.handleAPIData}>Get Data</button>
//                 {
//                     title.map(data=> <li key={data.id}>{data.title}</li>)
//                 }
//                 {
//                     body.map(data1=><p key={data1.id}>{data1.body}</p>)
//                 }
//                 {
//                     userId.map(data2=><i key={data2.id}>{data2.userId}</i>)
//                 }
//             </div>
//         )
//     }
// }
// export default Getcall;


//this method is using componentDidMount whis=ch is a type in lifecycle method(mouting)
import React from "react";
import axios from "axios";
class Getcall extends React.Component{
    constructor(){
        super()
        this.state={
            userId:[],
            title:[],
            body:[]
        }
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    title:response.data,
                    body:response.data,
                    userId:response.data
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    
    render(){
        const{userId,title,body}=this.state;
      return (
        <div>
          <h1>This is a http get call method</h1>
          {
            userId.map(data=><b key={data.id}>{data.userId}</b>)
          }
          {
            title.map(data1=><h1 key={data1.id}>{data1.title}</h1>)
          }
          {
            body.map(data2=><p key={data2.id}>{data2.body}</p>)
          }
        </div>
      )
    }
}
export default Getcall;

