import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Userdata.css"

const Sellerdata = () => {
  
    const [users , setUsers] = useState([]);

    const fetchUsers = async ()=>{
        try{
            const res = await axios.get("http://localhost:8700/api/user/getAllSellers");
            console.log(res.data)
            setUsers(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[])   

  return (
    <div className="usersdata-container">
    <h2>Usersdata</h2>
    <table className="usersdata-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Sellerdata