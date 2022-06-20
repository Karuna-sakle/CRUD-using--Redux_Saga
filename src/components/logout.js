import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogout } from '../redux/actions/login';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate

  const fetchData = async () => {
    await dispatch(getLogout())
    localStorage.removeItem('user-info');
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-token');
    await navigate("/login")

  }

  useEffect(() => {
    fetchData()
    window.location.href = "/"
  })

  return (
    <>
      ....
    </>
  )
}
export default Logout;
