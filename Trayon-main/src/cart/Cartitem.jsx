import React, { useContext, useState,useEffect } from 'react';
import { Shopcontext } from '../context/Shop-context';
import dlt from "./delete.png"

export const Cartitem = (props) => {
  const { id, pname, image, price,mrp,pdts,material } = props.data;
  const { cartitems, addTocart, removeFromcart,removeFromCart } = useContext(Shopcontext);

  const [selectedQuantity, setSelectedQuantity] = useState(cartitems[id]);
  const [totalAmount, setTotalAmount] = useState(price * selectedQuantity);


  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setSelectedQuantity(newQuantity);

    const quantityToAdd = newQuantity - cartitems[id];
    if (quantityToAdd > 0) {
      addTocart(id, quantityToAdd);
    } else if (quantityToAdd < 0) {
      removeFromCart(id, Math.abs(quantityToAdd));
    }
  };
  useEffect(() => {
    setTotalAmount(price * selectedQuantity);
  }, [price, selectedQuantity]);
 

  return (
    <>
    <div className='cartItem'>
      <img src={image} alt="" className='cartimage'/>
      <div className="desc">
        <p>{pname}</p>
        <div className="brand">
        <h3>Material:{material}</h3>
        <h3>Brand:{pdts}</h3>
        </div>
       

        <span>You can cancel your order before shipped, and a full refund will be initiated.</span>
      </div>
      {/* <div className="countHandler">
        <button onClick={() => removeFromCart(id)}>-</button>
        <input value={selectedQuantity} readOnly />
        <button onClick={() => addTocart(id)}>+</button>
      </div> */}
      <div className="quantity">
      <label htmlFor="quantitySelect">Quantity:</label>
      <select
        id="quantitySelect"
        value={selectedQuantity}
        onChange={handleQuantityChange} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>


      </select>
      </div>
      <div className="pricecut">
        <span>₹{mrp}</span>
      <p>₹{totalAmount}/-</p>
      </div>
      <img className='delete' src={dlt} alt="" onClick={()=> removeFromcart(id)}/>
    </div>
    </>
  );
};
