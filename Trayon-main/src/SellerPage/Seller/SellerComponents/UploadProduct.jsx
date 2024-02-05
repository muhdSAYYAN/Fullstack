// UploadProduct.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  
  const [productData,setProductData] =useState({
    pname:"",
    price:0,
    quantity:0,
    description:"",
    file:null,
  });
  
  const handleInput =(e)=>{
    const{name, value} = e.target;
    setProductData({...productData,[name]:value});
  }

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    setProductData({...productData, file})
  }

  const handleUploadData = async ()=>{
    try{
      const formData = new FormData();
      formData.append("file",productData.file)
      formData.append("pname",productData.pname)
      formData.append("price",productData.price)
      formData.append("quantity",productData.quantity)
      formData.append("description",productData.description)


      const res = await axios.post("http://localhost:8700/api/addProduct/uploadProduct", formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" }, },);
      console.log(res.data);
    }
    catch(err){
      console.log(err)
    }
  }

 console.log(productData)
   
  return (
    <div>
      <h2>Upload Product</h2>
      <form encType="multipart/form-data" style={{padding:"10px"}}>
        <label>Product Name:</label>
        <input type="text" name="pname" onChange={handleInput}/>

        <label>Price:</label>
        <input type="number" name="price" onChange={handleInput} />

        <label>Quantity:</label>
        <input type="number" name="quantity"  onChange={handleInput} />

        <label>Description:</label>
        <textarea name="description"  onChange={handleInput} />

       
        <label>Image:</label>
        <input type="file" name="file" onChange={handleFileChange}/>

        <button type="button" onClick={handleUploadData}>Upload Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
