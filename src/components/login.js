import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../redux/actions/login';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const user = useSelector(state => state.user.user)
  const err = useSelector(state => state)
  console.log(23,err.user.error)
  const dispatch = useDispatch(); 

  const onSubmit = (data) => {
    console.log("onsbumit", data)
    dispatch(getLogin(data))

  }

  useEffect(() => {
      if (user && user.length !== 0) {
      window.location.href = "/dashboard"
    }

  })

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Email</p>
        <input type="text" placeholder='Enter Your Email' {...register("email", { required: true })} />
        <p></p>
        {errors.email && <p>Email is Required</p>}
        <p>Password</p>
        <input type="password" placeholder='Enter Password' {...register("password", { required: true })} />
        {errors.password && <p>Password is Required</p>}
        <p></p>
        <input type="submit" className="btn btn-sm btn-success" />
      </form>
    </div>
  )
}
