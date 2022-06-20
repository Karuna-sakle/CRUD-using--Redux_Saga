import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { getRegister } from '../redux/actions/login';
import { getPost } from '../redux/actions/post';
import React from 'react'
export const Register = () => {
  
  const {register, handleSubmit, formState:{errors}} =useForm();
  const error = useSelector(state=>state.user.error)

  const dispatch = useDispatch();


  const onSubmit=(data)=>{
    dispatch(getRegister(data))
  }
  
  useEffect(()=>{
    const user  = JSON.parse(localStorage.getItem("user-info"))
    if (user && user.length != 0){
      window.location.href = "/dashboard"
    }
  })

  return (
    <div>
        <h1>Registration Form</h1>
        {error && "email or password is incorrect"}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email</p>
          <input type="text" placeholder='Enter Your Email' {...register("email", {required:true})} />
          <p></p>
          {errors.email && "Email is required"}
          <p></p>
          <p>Password</p>
          <input type="password" placeholder='Enter Your password' {...register("password", {required:true})}  />
          
          <p>{errors.password && "Password is required"}</p>
          <p>Confirm Password</p>
          <input type="password" placeholder='Enter Your ConfirmPwd' {...register("confirmPassword", {required:true})}/>
          <p>{errors.confirmPassword && "ConfirmPassword is Required"}</p>
          <p></p>
          <button type='submit' className="btn btn-sm btn-success">SignUp</button>
        </form>
    </div>
  )
}
