import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Orders = () => {
 
    const [data,setData] = useState([]);

        const getProduct = async ()=>{
            try{
                const res = await axios.get("http://localhost:8700/api/order/getOrder",{});
                console.log(res.data)
                setData(res.data)
            }catch(err){
                console.log(err)
            }
        }

        useEffect(()=>{
            getProduct()
        },[])

  return (
    <div className="Productsdata-container">
    <h2>My Orders</h2>
    <table className="Productsdata-table">
    <thead>
        <tr>
        <th>ID</th>
        <th>Client Name</th>
        <th>Address</th>
        <th>Product Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Amount</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody >
    {data.map((product) => (
      <tr >
        <td>{product.id}</td>
        <td>{product.client}</td>
        <td style={{textAlign:"center"}}>{product.address},{product.ph}</td>
        <td>{product.pname}</td>
        <td><img style={{width:"200px",height:"200px",padding:"2px"}} src={`/upload/${product.pimg}`}alt="" srcset="" /></td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.price * product.quantity}</td>
        <td style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",height:"230px",flexDirection:"column"}}>
            <button className='delete' style={{width:"100px"}}>Reject</button>
            <button className='delete' style={{backgroundColor:"green",width:"100px"}}>Accept</button>
            <button className='delete' style={{backgroundColor:"blue",width:"100px"}}>Ship order</button>
        </td>
      </tr>
    ))}
    </tbody>
    </table>
</div>
  )
}

export default Orders