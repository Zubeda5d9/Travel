import React from 'react'
import shopLogo from './Images/shopping.png'
import Products from './Products'

function Home() {
  return (
    <div>
      <div style={{width:500}}>
      <img src={shopLogo} style={{width:1270 ,height:400}}></img>
      </div>
      
      <div className="products bg-light p-3">
        <div className='p-3 d-flex '>
          <div className='w-50 p-2 bg-white m-2'>
            <Products></Products>
            
      
          </div>
          <div className='w-50 p-2 bg-white m-2'>
            <Products></Products>
          </div>
        </div>
        <div className='p-3 d-flex '>
          <div className='p-2 bg-white m-2'>
            <Products></Products>
      
          </div>
          <div className='p-2 bg-white m-2'>
            <Products></Products>
          </div>
          <div className='p-2 bg-white m-2'>
            <Products></Products>
          </div>
        </div>
        <div className='p-3 '>
          <div className='p-2 bg-white m-2 d-flex justify-content-center'>
            <Products></Products>
      
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
