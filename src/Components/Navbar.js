import React from "react";
import "./styles.css"
import Icon from "./res-icon.png"
const Navbar=()=>{
    return(
        <div>
            <header className="icon">
                <a href="#">
                    <img src={Icon} className="Img"></img>
                </a>
                <nav className="navbar">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Menu">Menu</a>
                    <a href="#Contact">Contact</a>
                    <a href="#Blog">Blog</a>
                </nav>
                {/* <div className="menu">
                    <div className="fas fa-search"></div>
                    <div className="fas fa-shopping-cart"></div>
                    <div className="fas fa-bars" id="bars-btn"></div>
                </div> */}
                {/* <div className="search-form">
                    <input type="search" placeholder="Search here" id="search-box"></input>
                    <label htmlFor="search-box" className="fas fa"></label>
                </div>   */}
                

            </header>
        </div>
    )
}
export default Navbar