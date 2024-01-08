import React from 'react'
import "../Seller/Seller.css"
import user from "../assets/users.png"
import seller from "../assets/vendor.png"
import request from "../assets/add-friend.png"
import block from "../assets/ban-user.png"


const Seller = () => {
  return (
    <div className='seller'>
       
       <div className="sellnav">
        <h2>Seller</h2>
           <h6>Home</h6>
           <h6>Data</h6>
           <h6>Login</h6>
         
       </div>

       <div className="sellcontent">
          <h4>Wlecome Seller</h4>
          <h5>Get ttodays Update!</h5>
       </div>

       <div className="sellerparts">
          <div className="selleritems">
            <img src={user} alt="" srcset="" />
            <h6>Users</h6>
          </div>

          <div className="selleritems">
            <img src={seller} alt="" srcset="" />
            <h6>Sellers</h6>
          </div>

          <div className="selleritems">
            <img src={request} alt="" srcset="" />
            <h6>Sellers Request</h6>
          </div>

          <div className="selleritems">
            <img src={block} alt="" srcset="" />
            <h6>Blocked List</h6>
          </div>

          
       </div>

    </div>
  )
}

export default Seller