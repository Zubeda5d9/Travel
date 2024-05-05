import React from 'react'
import Frock from './Images/babyfrock.png'


function Products() {
    const cardStyle={
        border:"2px solid,black",
        borderRadius:"10px",
        overflow:"hidden",
        margin:"10px",
        width:"300px",
    }
    const imageStyle={
        width:'200px',
        height:'auto',
    }
    const contentStyle={
        padding:"10px"
    }
    const titleStyle={
        fontSize:"18px",
        
    }
    // const textStyle={
    //     fontSize:"16px",
    // }
  return (
    <div className='d-flex flex-column'>
        <div style={cardStyle}>
      {/* <h3>Title of product</h3>
      <string>"&#8377;" 50000</string>
      <p>⭐⭐⭐</p>
      <img></img> */}
        <img src={Frock} style={imageStyle}></img>
        <div style={contentStyle} className='d-flex flex-column'>
            <h2 style={titleStyle}>Baby Frock</h2>
            {/* <p style={textStyle}>Its a very beautiful baby frock</p> */}
            <button className='btn btn-warning '>Add Product</button>
        </div>
        </div>
    </div>
  )
}

export default Products
