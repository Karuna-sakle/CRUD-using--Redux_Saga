import React from 'react'
import { Login } from './login'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>

      <h1>Welcome To Home</h1>
      <Login />
      <br />
      <div>
        <p>
          Create Your Account<Link to={"/signup"}>SignUp</Link></p>
      </div>
    </div>
  )
}
