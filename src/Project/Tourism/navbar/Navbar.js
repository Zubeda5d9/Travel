import React, {useState} from 'react'

import './Navbarstyles.css'
// import {BiSearch} from 'react-icons/bi'
// import {BsPerson} from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai'
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaPinterest} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"



import {Link} from "react-scroll"


function Navbar() {
    const [nav, setNav]=useState(false)
    const handleNav=()=> setNav(!nav)
  return (
    
    <div name="home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo change' : 'logo'}>
            <h2>BEACHES</h2>
        </div>
        <ul className='nav-menu'>
            <Link to="home"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="destination"><li>Destinations</li></Link>
            <Link to="book"><li>Book</li></Link>
            
        </ul>
        {/* <div className='nav-icons'>
            <BiSearch className='icon' style={{ color: '#000' }}/>
            <BsPerson className='icon' style={{ color: '#000' }}/>

        </div> */}
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className='icon'  style={{ color: '#000' }}/>) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
        </div>
        <div className={nav ? 'mobile-menu active':'mobile-menu'}>
            <ul className='mobile-nav'>
                <Link to="home"><li>Home</li></Link>
                <Link to="about"><li>About</li></Link>
                <Link to="destination"><li>Destinations</li></Link>
                <Link to="book"><li>Book</li></Link>

            </ul>
            <div className='mobile-menu-bottom'>
                {/* <div className='menu-icons'>
                    <button>Search</button>
                    <button>Account</button>
                </div> */}
                <div className='social-icons'>
                    <FaFacebook className='icon'></FaFacebook>
                    <FaInstagram className='icon'></FaInstagram>
                    <FaPinterest className='icon'></FaPinterest>
                    <FaTwitter className='icon'></FaTwitter>
                    <FaYoutube className='icon'></FaYoutube>
                </div>
            </div>

        </div>
    </div>
  )
}


export default Navbar
