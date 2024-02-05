    import axios from 'axios';
import React, { useEffect, useState } from 'react'

    const Myproducts = () => {
    
        const [data,setData] = useState([]);

        const getProduct = async ()=>{
            try{
                const res = await axios.get("http://localhost:8700/api/addProduct/getProduct");
                console.log(res.data)
                setData(res.data)
            }catch(err){
                console.log(err)
            }
        }

        useEffect(()=>{
            getProduct()
        },[])

        const handleDelete = async (productId) => {
            try {
              await axios.delete(`http://localhost:8700/api/addProduct/dltdeleteProduct/${productId}`,{ withCredentials: true });
              setData((prev) => prev.filter((Product) => Product.id !== productId));
            } catch (err) {
              console.log(err);
            }
          };
        
        // console.log(data.img)

    return (
        <div className="Productsdata-container">
        <h2>My Products</h2>
        <table className="Productsdata-table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody >
        {data.map((Product) => (
          <tr key={Product.id}>
            <td>{Product.id}</td>
            <td>{Product.pname}</td>
            <td><img style={{width:"200px",height:"200px",padding:"2px"}} src={`/upload/${Product.pimg}`}alt="" srcset="" /></td>
            <td>{Product.price}</td>
            <td>{Product.description}</td>
            <td>{Product.quantity}</td>
            <td >
                <button className='delete' onClick={()=>handleDelete(Product.id)}>delete</button>
            </td>
          </tr>
        ))}
        </tbody>
        </table>
    </div>
    )
    }

    export default Myproducts