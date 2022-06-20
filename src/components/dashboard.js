import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getPost } from '../redux/actions/post'
import { ListPost } from './getpost'
//import Logout from './logout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const handleClick = () => {
    navigate("/post")
  }
  const handleLogout = () => {
    navigate("/logout")
  }
  
  useEffect(() => {
    dispatch(getPost())
  })

  return (
    <div >
      <br />
      <ListPost />
      <p>
        <button onClick={handleClick} class="btn btn-primary">Create Post</button>
      </p>
      <p>
        <button onClick={handleLogout} class="btn btn-dark">Logout</button>
      </p>



    </div>
  )
}
