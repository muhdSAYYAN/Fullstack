import React from 'react'
import li from "./linkedin-logo.png"
import insta from "./instagram.png"
import twi from "./twitter.png"
import wtsp from './whatsapp.png'

export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <h1>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK</h1>
        <div className="inp">
            <input type="search" name="" id="" />
            <button>Subscribe</button>
        </div>

    </div>
    <div className="footer-1">
      <div className="info">
<h1>Explore</h1>
<span>Refer and Earn</span>
<span>Gift cards</span>
<span>Buy in Bulk</span>
<span>Visit us</span>
      </div>
      <div className="info">
        <h1>The company</h1>
        <span>About us</span>
        <span>Help us</span>
        <span>Blog</span>
        <span>Inside ul</span>
        </div>
        <div className="info">
        <h1>Connect us</h1>
        <img src={li} alt="" />
        <img src={insta} alt="" />
        <img src={wtsp} alt="" />
        <img src={twi} alt="" />
        </div>
        <div className="info">
        <h1>Address</h1>
        <span>Reliance Retail Limited,
3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India

</span>
<span>CIN: U01100MH1999PLC120563</span>


        </div>
    </div>
    </>
  )
}
