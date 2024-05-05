import { useParams } from "react-router-dom";
// import iphone from "./Iphone 14+.png"
// import oppo from "./Oppo.png"
const ProductDetails=()=>{
    const {name,price}=useParams();
    return(
        <div>
            <h1>Name is: {name}</h1>
            <h1>Price is: {price}</h1>
            {/* <img src={iphone}></img>
            <img src={oppo}></img> */}
        </div>
    )
}
export default ProductDetails;