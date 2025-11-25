import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // usenavigate to render on admin page
  const navigate=useNavigate()

  const [message, setMessage] = useState('');

  // Predefined credentials
  const admindata = {
    email: 'Nitin@gmail.com',
    password: 'Nitin123'
  };

  const handleChange = (e) => {
   
      const{ name, value } = e.target
      setLoginData({...loginData,[name]:value})

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      loginData.email === admindata.email &&
      loginData.password === admindata.password
    ) {
      setMessage('Login successful! Welcome Admin.');

      // use navigate
      navigate('/admin_page')
    } else {
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <div className="admincontainer">
        <div className="admin">
          <h4>Admin Login</h4>
          <hr />
          {/* for displaying message of login */}
          {message} <hr />
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email address</label><br />
            <input type="text" name='email' placeholder='Enter admin email' onChange={handleChange} required/><br />

            <label htmlFor="">Password</label><br />
            <input type="password" name='password' placeholder='password' onChange={handleChange} required /><br /><br />
           
            <div className="btn">
              <button>Login</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
