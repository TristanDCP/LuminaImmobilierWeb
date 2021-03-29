import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './Login.css';

import axios from 'axios';

async function loginUser(credentials) {
  return axios.post('http://localhost:8000/api/v1/login', credentials)
    .then(data => data)
    .catch(err => console.log(err))
}

// async function loginUser(credentials) {
//   return fetch('http://localhost:8000/api/v1/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//     .catch(err => console.log(err))
// }
 
export default function Login({ setToken }) {

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      userEmail,
      userPassword
    });
    setToken(token.data);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>secretaire@lumina.fr</p>
          <input type="text" onChange={e => setUserEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setUserPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}