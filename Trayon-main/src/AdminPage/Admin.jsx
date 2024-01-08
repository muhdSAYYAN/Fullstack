import React from 'react'
import "../AdminPage/Admin.css"
import user from "./assets/users.png"
import seller from "./assets/vendor.png"
import request from "./assets/add-friend.png"
import block from "./assets/ban-user.png"
import { Link } from 'react-router-dom'


const Admin = () => {
  return (
    <div className='Admin'>
       
       <div className="adminnav">
        <h2>Admin</h2>
           <h6>Home</h6>
           <h6>Data</h6>
           <h6>Login</h6>
         
       </div>

       <div className="admincontent">
          <h4>Wlecome Admin</h4>
          <h5>Get ttodays Update!</h5>
       </div>

       
         <div className="adminerparts">

         <Link to="/allusers" className="admineritemslink">
          <div  className="admineritems">
            <img src={user} alt="" srcset="" />
            <h6>Users</h6>
          </div>
          </Link>
          
          <Link to="/allsellers" className="admineritemslink">
          <div className="admineritems">
            <img src={seller} alt="" srcset="" />
            <h6>Sellers</h6>
          </div>
          </Link>
       
          <Link to="/allusers" className="admineritemslink">
          <div className="admineritems">
            <img src={request} alt="" srcset="" />
            <h6>Sellers Request</h6>
          </div>
          </Link>

          <Link to="/allusers" className="admineritemslink">
          <div className="admineritems">
            <img src={block} alt="" srcset="" />
            <h6>Blocked List</h6>
          </div>
          </Link>

          
       </div>

    </div>
  )
}

export default Admin