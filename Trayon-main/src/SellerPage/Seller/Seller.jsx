import React from 'react'
import "../Seller/Seller.css"
import add from "./Assets/add.png"
import money from "./Assets/earn-money.png"
import orders from "./Assets/tracking.png"
import my from "./Assets/features.png"
import { Link } from 'react-router-dom'


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

        <Link to="/myproduct" className='admineritemslink'>
          <div className="selleritems">
            <img src={my} alt="" srcset="" />
            <h6>My Products</h6>
          </div>
          </Link>
  

          <Link to="/addproduct" className='admineritemslink'>
          <div className="selleritems">
            <img src={add} alt="" srcset="" />
            <h6>Add Product</h6>
          </div>
          </Link>

          <Link to="/orders" className='admineritemslink'>
          <div className="selleritems">
            <img src={orders} alt="" srcset="" />
            <h6>Orders</h6>
          </div>
          </Link>
   
          <Link to="/myproduct" className='admineritemslink'>
          <div className="selleritems">
            <img src={money} alt="" srcset="" />
            <h6>My Earnings</h6>
          </div>
          </Link>

          
       </div>

    </div>
  )
}

export default Seller