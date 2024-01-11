// UploadProduct.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    pname: '',
    price: 0,
    quantity: 0,
    description: '',
    pimg: null, // The file input
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // Check if the input is a file input
    if (type === 'file') {
      setProductData({ ...productData, [name]: e.target.files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('pname', productData.pname);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    formData.append('description', productData.description);
    formData.append('pimg', productData.pimg);

    // Assuming your API is running on http://localhost:8700
    axios.post('http://localhost:8700/api/addProduct/uploadProduct', formData)
      .then(response => {
        console.log(response.data);
        // Handle success or redirection if needed
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <form encType="multipart/form-data" style={{padding:"10px"}}>
        <label>Product Name:</label>
        <input type="text" name="pname" value={productData.pname} onChange={handleInputChange} />

        <label>Price:</label>
        <input type="number" name="price" value={productData.price} onChange={handleInputChange} />

        <label>Quantity:</label>
        <input type="number" name="quantity" value={productData.quantity} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={productData.description} onChange={handleInputChange} />

        <label>Product Image:</label>
        <input type="file" name="pimg" onChange={handleInputChange} />

        <button type="button" onClick={handleUpload}>Upload Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
