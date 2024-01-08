import React,{useContext} from 'react'
import "./Navbar.css"
import logo from "./shopping-cart.png"
import home from "./home.png"
import { Shopcontext } from '../context/Shop-context';
import contact from "./contact-us.png"
import { Outlet,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { cartitems } = useContext(Shopcontext);
  const navigate = useNavigate();


  // Calculate the total count of items in the cart
  const itemCount = Object.values(cartitems).reduce((acc, quantity) => acc + quantity, 0);
  return (
    <>
    <div className='navbar'>
        <div className="logo">
            <Link to={'/'} className='trayon'><h1>TRAYON</h1></Link>

        </div>
        <div className="search">
           <h1>Feast for the Eyes</h1>
           <h1> | Up to 50% off |</h1>
           <h2>NOW LIVE! </h2>
            

        </div>
        <div className="icons">
            <Link to='/'><img src={home} alt="" /></Link>
            <Link to='/cart'>
              <div className="cart-icon">
                <img src={logo} alt="" />
                {itemCount > 0 && <span className="item-count">{itemCount}</span>}
              </div>
            </Link>
            
            <img src={contact} alt="" />

        </div>

    </div>
    <div className="items">
    <span className="dropdown">
    Interiors
    <div className="dropdown-content">
      <h1>Urban interios</h1>
      <a href="#" onClick={() => navigate("Products")}>Full home interiors</a>
      <a href="#" onClick={() => navigate("Products")}>Modular kitchens</a>
      <a href="#" onClick={() => navigate("Products")}>Modular wardrobes</a>
    </div>
    </span>
    <span className="dropdown">
    Living
    <div className="dropdown-content">
      <h1>Sitting&Tables</h1>
      <a href="#" onClick={() => navigate("Products")}>Lounge chairs</a>
      <a href="#" onClick={() => navigate("Products")}>Coffee tables</a>
      <a href="#" onClick={() => navigate("Products")}>Show cases</a>
    </div>
    </span>
    <span className="dropdown">
    Outdoor
    <div className="dropdown-content">
      <h1>Balcony&Outdoor</h1>
      <a href="#" onClick={() => navigate("Products")}>Balcony chairs</a>
      <a href="#" onClick={() => navigate("Products")}>Balcony sets</a>
      <a href="#" onClick={() => navigate("Products")}>Outdoor tables</a>
    </div>
    </span>
    <span className="dropdown">
    Storage
    <div className="dropdown-content">
      <h1>Dining&Living</h1>
      <a href="#" onClick={() => navigate("Products")}>Shoe racks</a>
      <a href="#" onClick={() => navigate("Products")}>Cupboards</a>
      <a href="#" onClick={() => navigate("Products")}>Kids bookshelves</a>
    </div>
    </span>
    <span className="dropdown">
    Lights&Decor
    <div className="dropdown-content">
      <h1>Lighting&Wall</h1>
      <a href="#" onClick={() => navigate("Products")}>Floor lambs</a>
      <a href="#" onClick={() => navigate("Products")}>Wall lambs</a>
      <a href="#" onClick={() => navigate("Products")}>Planters</a>
    </div>
    </span>
    <span className="dropdown">
    Bedroom&mattress
    <div className="dropdown-content">
      <h1>Beds&Accessories</h1>
      <a href="#" onClick={() => navigate("Products")}>Wood Beds</a>
      <a href="#" onClick={() => navigate("Products")}>Foam Mattresss</a>
      <a href="#" onClick={() => navigate("Products")}>Kids Room</a>
    </div>
    </span>
    <span className="dropdown">
    Dining
    <div className="dropdown-content">
      <h1>Tables&Furnitures</h1>
      <a href="#" onClick={() => navigate("Products")}>6 Seater Tables</a>
      <a href="#" onClick={() => navigate("Products")}>Dining chairs</a>
      <a href="#" onClick={() => navigate("Products")}>Dining Benches</a>
    </div>
    </span>
      
    </div>
    <Outlet/>
    </>
  )
}
