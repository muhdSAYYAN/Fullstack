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

    return (
        <div className="usersdata-container">
        <h2>My Products</h2>
        <table className="usersdata-table">
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
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.pname}</td>
            <td><img style={{width:"200px",height:"200px",padding:"2px"}} src={user.pimg} alt="" srcset="" /></td>
            <td>{user.price}</td>
            <td>{user.description}</td>
            <td>{user.quantity}</td>
            <td >
                <button className='delete'>delete</button>
            </td>
          </tr>
        ))}
        </tbody>
        </table>
    </div>
    )
    }

    export default Myproducts