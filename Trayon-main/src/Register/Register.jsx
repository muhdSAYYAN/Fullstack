import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [err , setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
       const res = await axios.post("http://localhost:8700/api/auth/register" , inputs)
      console.log(res);
      navigate("/log")
    }catch(err){
     setErr(err.response.data)
    }
  }

  return (
    <div className='registerPage'>
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <label htmlFor="firstName">Full Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <label htmlFor="firstName">User Name:</label>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          {err && err}
          <button type="button" onClick={handleSubmit}>Register</button>

          <p>
            Already have an account?
            <Link to="/log">
              <b style={{ color: 'blue', cursor: 'pointer' }}>Login</b>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
