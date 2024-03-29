import React, { useContext, useEffect, useState } from 'react';
import allproducts from '../Products/Prdata';
import { Cartitem } from './Cartitem';
import { Shopcontext } from '../context/Shop-context';
import './cart.css'
import { Link } from 'react-router-dom';
import { ContProvider } from '../context/Mycontext';
import axios from 'axios';

export const Cart = () => {

  const {items} = useContext(ContProvider)

  // console.log(items);
  
  const { cartitems,getTotal,clearCart } = useContext(Shopcontext);
  const totalamount = getTotal();
  const delivarypercent = 2.5;
  const discountPercent = 2;
  const discountAmount = (totalamount * discountPercent) / 100;
  const delivaryAmount = (totalamount * delivarypercent) / 100;

const totalPayableAmount = (totalamount + delivaryAmount) - discountAmount;

// const[orderData,setOrderData] = useState([])

const [userName, setUserName] = useState(null);

  useEffect(() => {
    const usernameFromLocalStorage = () => {
      const localData = localStorage.getItem('user');

      if (localData !== null) {
        setUserName(JSON.parse(localData));
      } else {
        console.log('object');
      }
    };

    usernameFromLocalStorage();
  }, []);

  // console.log('dfsfdf', userName.username);


const handlePlaceorder = async () => {
  const updatedOrderData = [];

  items.forEach(item => {
    if (cartitems[item.id] > 0) {
      updatedOrderData.push(item);
    }
  });
  
  console.log("Updated Order Data:", updatedOrderData);

  try {
    const requestBody = {
      orderData: updatedOrderData,
      userName: userName
    };

    await axios.post("http://localhost:8700/api/order/postOrder", requestBody, { withCredentials: true });
    alert("Order placed successfully");
    clearCart();

  } catch (error) {
    console.error("Error placing order:", error);
  }
};





  return (
    <>
    {totalamount > 0 ?
      <div className="dts">
      <span>PRODUCT</span>
      <span>DETAILS</span>
      <span>QUANTITY</span>
      <span>TOTAL</span>
      <span>REMOVE</span>
  </div> : null}
   
    <div className='cart'>
      <div className="cartitems">
        {items.map((product) => {
          if (cartitems[product.id] !== 0) {
            return (
              <div key={product.id}>
                <Cartitem data={product} />
              </div>
            );
          }
          return null; 
        })}
      </div>
      {totalamount >0 ?
       <div className="checkout">
        <div className="apply">
            <img src="https://cdn-icons-png.flaticon.com/128/3210/3210036.png" alt="" />
        <span>Apply Coupon and Save Extra</span>
        </div>
        <div className="pay">
            <span>CartTotal</span>
            <span>₹{totalamount}</span>

        </div>
        <div className="pay">
            <span>Delivary charge</span>
            <span>₹{delivaryAmount}</span>

        </div>
        <div className="pay">
            <span>Discount</span>
            <span>₹{discountAmount}</span>

        </div>
        <div className="pay">
            <span>Total Payable Amount</span>
            <h6>₹{totalPayableAmount}/-</h6>

        </div>
        <div className="btns">
       
       <Link to="/nav/products"><button className='shopping'>Continue shopping</button></Link>
       <button className='btn1' onClick={handlePlaceorder}>Place Order</button>

        </div>
       
     </div>
     :<h1 className='h11'>Your Cart is Empty!</h1>}


      

    </div>
    </>
  )
}
export default Cart;
