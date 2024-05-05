import { useParams } from "react-router-dom";
// import phone from "./Iphone 14+.png";
// import redmi from "./Readmi.png"
const Productdetails =()=>{
    
    var {data}=useParams();
    data = JSON.parse(data);
    return(
        
        <div>
            <h1>In this we can view details of the products</h1>
            <h2>Product Name is: {data.name}</h2>
            <h2>Price is: {data.price}</h2>
            <h2>RAM is: {data.RAM}</h2>
            <h2>desc is: {data.desc}</h2>
            {/* <img src={phone}></img>
            <img src={redmi}></img> */}
            
            
        </div>
        
    )

    
}
export default Productdetails;



// import { useParams } from "react-router-dom";


// const Productdetails = () => {

//     var {data} = useParams();

//     data = JSON.parse(data);

//     return(
//         <div>
//             <h1>Welcome to Product Details Page</h1>
//             <h2>Product Name is : {data.name}</h2>
//             <h2>Product Price is : {data.price}</h2>
//             <h2>Product RAM is : {data.RAM}</h2>
//             <h2>Product desc are : {data.desc}</h2>
//         </div>
//     )
// }

// export default Productdetails;