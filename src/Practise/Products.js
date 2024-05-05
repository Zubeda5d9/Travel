import React, {useState} from "react"
import {Link} from 'react-router-dom'

const Products=()=>{
   const [Products]=useState([
    {name:"Iphone14+",price:180000},
    {name:"Oppo+",price:20000},
    {name:"Readmi",price:25000},
    {name:"Realmi",price:18000}
   ])
   return(
    <div>
        {
            Products.map((data)=>{
                return(
                    <ol>
                        <h1><Link to={`/productdetails/${data.name}/${data.price}`}>{data.name}</Link></h1>
                    </ol>
                )

            })
        }
        
    </div>
   )
}
export default Products