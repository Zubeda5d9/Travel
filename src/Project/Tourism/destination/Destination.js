import React from 'react'
import './Destinationstyles.css'


import KeyResort from './keyresort.png';
import WickaninnishRes from './wiakres.png';
import BiarritzRes from './Biarritz.png';
import Reethires from './reethi.png';
import MiamiRes from './mimnightres.png';




function Destination() {
  return (
    <div name="destination" className='destination'>
      <div className='container'>
        <div className='heading'>
          <h1>Famous Beach Resorts</h1>
        </div>
          <div className='img-container'>
            <div className='card'>
              <div className='card-body'>
                <img src={KeyResort}></img>
                <b>The Pier House Resort & Spa offers a slice of tropical paradise, effortlessly blending the free-spirited ambiance of Key West with a touch of luxurious tranquility. The rooms are tastefully adorned, mirroring the tropical charm with modern sophistication.</b>
              </div>
            </div><br/><br/>
            <div className='card'>
              <div className='card-body'>
                <img src={WickaninnishRes}></img>
                <b>Immersive and captivating, the Wickaninnish Inn celebrates its rich heritage through attentive hospitality and the spirit of adventure. Perched between the ancient rainforest and the sea, our location offers unparalleled access to the true nature of Vancouver Island’s west coast.</b>
              </div>
            </div><br/><br/>
            <div className='card'>
              <div className='card-body'>
                <img src={BiarritzRes}></img>
                <b>Biarritz is famous for its beautiful beaches, elegant promenades, and upscale resorts. It's a hotspot for surfers, with excellent waves along its coastline.</b>
              </div>
            </div><br/><br/>
            <div className='card'>
              <div className='card-body'>
                <img src={Reethires}></img>
                <b>One&Only is a remarkable collection of exceptional one-off Resorts and Private Homes that place you in the heart of each fascinating environment. Born with an independent spirit, One&Only reflects the true essence of every destination via curated experiences, personalised service and outstanding style. No two places are ever the same</b>
              </div>
            </div><br/><br/>
            <div className='card'>
              <div className='card-body'>
                <img src={MiamiRes}></img>
                <b>Miami is one of the state's – and the world’s – most popular vacation spots. Though destinations often are said to offer something for everyone.The trendy nightlife of South Beach will be amazing.</b>
              </div>
            </div><br/><br/>
          </div>
      </div>
    </div>
  )
}

export default Destination
