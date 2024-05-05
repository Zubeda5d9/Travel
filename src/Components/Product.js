import React, {useState} from "react";
import {Link} from "react-router-dom";
// import Productdetails from "./ProductDetails";


const Product=()=>{
    
    const[Product]=useState([
        {name:"Iphone 14+",price:180000,RAM:"512gb",desc:"Excellent Product"},
        {name:"Redmi",price:10000,RAM:"256gb",desc:"wonderful product"},
        {name:"Realmi",price:15000,RAM:"128gb",desc:"Good Product"},
        {name:"Oppo",price:25000,RAM:"128gb",desc:"nice product"}
    ])
    return(
        <div>

            <h1>this is product page</h1>
            {
                Product.map((data)=>{
                    return(
                    //handle specific data
                    // <h2><Link to={`/productdetails/${data.name}/${data.price}`}>{data.name}</Link></h2>
                    //handle huge data we use json.strinfy method
                    <h2>
                        <Link to={`/productdetails/${JSON.stringify(data)}`}>
                            {data.name}
                        </Link>
                    </h2>
                    )
                })
            }
            {/* {Product.map((products)=>(
                <Productdetails key={products.id} product={Product}/>
            ))} */}
            
            
        </div>
    )
}
export default Product;




// import React,{useState} from "react";
// import {Link} from "react-router-dom";

// const Products = () => {

//     const [products] = useState([
//         {pname : "Iphone15ProMax",price : 180000},
//         {pname : "OnePlus11R",price : 45000},
//         {pname : "Realme12Pro",price : 35000},
//         {pname : "VivoV25",price : 40000},
//         {pname : "OppoReno",price : 32000}
//     ])

//     return(
//         <div>
//             <h1>Welcome to Products Page</h1>
//             {
//                 products.map((data) => {
//                     return(
//                         <ol>
//                             <h1><Link to={`/productdetails/${data.pname}/${data.price}`}>{data.pname}</Link></h1>
//                         </ol>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Products;