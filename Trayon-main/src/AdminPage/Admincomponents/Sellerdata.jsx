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

    const handleBlockUser = async (userId) => {
      try {
        console.log('Blocking user with ID:', userId);
        await axios.put(`http://localhost:8700/api/user/blockUsers/${userId}`, { userId });
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } catch (err) {
        console.log(err);
      }
   }

   const handleDeleteUser = async (userId) => {
    try {
      console.log('delete user with ID:', userId);
      await axios.delete(`http://localhost:8700/api/user/deleteUser/${userId}`, { userId });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      console.log(err);
    }
  };

    useEffect(()=>{
        fetchUsers();
    },[])   

  return (
    <div className="usersdata-container">
    <h2>Sellersdata</h2>
    <table className="usersdata-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td >
                <button className='block'onClick={()=>handleBlockUser(user.id)}>block</button>
                <button className='delete' onClick={()=>handleDeleteUser(user.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Sellerdata