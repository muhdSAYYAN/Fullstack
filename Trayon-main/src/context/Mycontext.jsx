import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const ContProvider = createContext()



const Mycontext = ({children}) => {

    const [items,setItems] = useState([]);

    const getProduct = async ()=>{
        try{
            const res = await axios.get("http://localhost:8700/api/addProduct/getProduct",{withCredentials:true});
            console.log(res.data)
            setItems(res.data)
        }catch(err){
            console.log(err)
        }
    }
   
    useEffect(()=>{
        getProduct()
    },[])

  return (
    <ContProvider.Provider value={{items,setItems}}>
        {children}
    </ContProvider.Provider>
  )
}

export default Mycontext