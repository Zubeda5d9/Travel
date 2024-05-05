import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="text-decoration-none d-flex">
                <i className='bi bi-shop-window text-warning fs-3 me-2'></i>
                <a className="navbar-brand" href="#">Shopping</a>
            </Link>
            <div className="input-group">
            <input type='text' className="form-control " placeholder="Search....." aria-describedy="basic-adddon2"/>
            <div className="input-group-append bg-warning">
                <span className="input-group-text bg-warning" id="basic-addon2"><i className='bi bi-search'></i></span>
            </div>
                    
            </div>
            <ul className="navbar-nav mr-auto mt-2 ms-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link active d-flex flex-column" href="#">
                        <small style={{fontSize: "14px"}}>Hello</small> 
                        <strong style={{fontSize: "14px"}}>Guest</strong> <span className="sr-only">
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active d-flex flex-column" href="#">
                        <small style={{fontSize: "14px"}}>Your</small> 
                        <strong style={{fontSize: "14px"}}>Shop</strong> <span className="sr-only">
                        </span> 
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active d-flex" to="/checkout">
                        <i className='bi bi-cart text-white me-1'></i>
                        <span>0</span>
                    </Link>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Header
