

import React, { createContext,useState,useEffect } from 'react'
import allproducts from '../Products/Prdata';


export const Shopcontext = createContext(null);

const getdefaultcart = () => {
    let cart = {};
    for( let i=1; i<allproducts.length+1;i++){
        cart [i] =0;
    }
    return cart;
};
const getSavedCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cartitems");
    return savedCart ? JSON.parse(savedCart) : getdefaultcart();
  };

export const Shopcontextprovider = (props) => {
    const [cartitems,setcartitems] = useState(getSavedCartFromLocalStorage());
    const getTotal = () => {
        let totalamount = 0;
        for(const item in cartitems){
            if(cartitems[item] >0){
                let iteminfo = allproducts.find((product) => product.id === Number(item));
                totalamount += cartitems[item] * iteminfo.price;
            }
        }
        return totalamount;
    }

    const addTocart = (itemId) => {
        setcartitems((prev) => ({...prev, [itemId]: prev[itemId] +1 }));
    };
    const removeFromCart = (itemId) => {
        setcartitems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
    };
    const removeFromcart = (itemId) => {
        setcartitems((prev) => ({...prev,[itemId]: prev[itemId] - prev[itemId]})
        );
      };
      const saveToLocalStorage = (cartitems) => {
        localStorage.setItem("cartitems", JSON.stringify(cartitems));
      };


    useEffect(() => {
        saveToLocalStorage(cartitems);
    },[cartitems]);

    const contextValue = { cartitems, addTocart,removeFromCart,getTotal,removeFromcart};


  return (
    <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>

  )
}
