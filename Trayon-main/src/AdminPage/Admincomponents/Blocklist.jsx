import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blocklist = () => {
 
    const[list,setList] = useState([]);

    const blockedList = async ()=>{
        try{
             const res = await axios.get("http://localhost:8700/api/user/blockedlist");
            //  console.log(res.data)
             setList(res.data)
        }catch(err){
        console.log(err)
    }
}

const handleUnblock = async (userId)=>{
    try{
      await axios.put(`http://localhost:8700/api/user/unblock/${userId}`,{userId})
      setList(prevData => prevData.filter((user)=>user.id !== userId));
    }catch(err){
        console.log(err)
    }
}

const handleDeleteUser = async (userId) => {
    try {
      console.log('delete user with ID:', userId);
      await axios.delete(`http://localhost:8700/api/user/deleteUser/${userId}`, { userId });
      setList((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      console.log(err);
    }
  };

useEffect(()=>{
    blockedList()
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {list.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td style={{display:"flex",gap:"20px"}}>
                <button className='unblock' onClick={()=>handleUnblock(user.id)}>unblock</button>
                <button className='delete' onClick={()=>handleDeleteUser(user.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Blocklist