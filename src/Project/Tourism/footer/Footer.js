import React from 'react'
import './FooterStyles.css'
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaPinterest} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
            <div className='top'>
                <h3>BEACHES</h3>
                <div className='social'>
                    <FaFacebook className='icon'></FaFacebook>
                    <FaInstagram className='icon'></FaInstagram>
                    <FaPinterest className='icon'></FaPinterest>
                    <FaTwitter className='icon'></FaTwitter>
                    <FaYoutube className='icon'></FaYoutube>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <ul>
                        <li>About</li>
                        <li>Partnership</li>
                        <li>Advertising</li>
                        
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>Contact</li>
                        <li>Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
