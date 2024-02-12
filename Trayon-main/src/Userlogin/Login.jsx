import React, { useState } from 'react'
import "../Userlogin/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [err , setErr] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  
 
  console.log(currentUser)

  const handleChange = (e) =>{
    setInputs((prev) => ({...prev,[e.target.name]:e.target.value}));
  }

  const navigate = useNavigate()

  const handleLogin =async (e)=>{
    e.preventDefault();
    if (!inputs.username || !inputs.password) {
      setErr("Please enter both username and password");
      return;
    }
    try{
      const res = await axios.post("http://localhost:8700/api/auth/login",inputs,{withCredentials:true})
      const userData = res.data
      setCurrentUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log('mydata: ',userData)
      if(userData.usertype === "user"){
        navigate("/nav/home")
      }else if(userData.usertype === "admin"){
        navigate("/admin")
      }else if(userData.usertype === "seller"){
        navigate("/seller")
      }
      

    }catch(err){
      setErr(err.response.data)
    }
  }

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
         onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
      />
      {err && err}
      <button onClick={handleLogin}>
        Login
      </button>

      <p>Create an account? <Link to='/register'><b style={{color:"blue",cursor:"pointer"}}>Register</b></Link></p>
    </form>
  </div>
  )
}

export default Login