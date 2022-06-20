import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showPost, updatePost } from '../redux/actions/post';

export const UpdatePost = () => {
  const { id } = useParams();
  console.log("id", id)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {register,setValue, handleSubmit, formState:{errors}} = useForm();
  const error = useSelector(state=>state.posts.error)

  const data = useSelector(state => state.posts.singleUser)
  console.log(888,data)

useEffect(()=>{
  dispatch(showPost(id))
},[id])
 
const onSubmit=(data)=>{
  console.log(45,data)
    dispatch(updatePost(data))
    navigate("/dashboard")
}

const handleBack=()=>{
  navigate("/dashboard")
}

useEffect(()=>{
  setValue('title' , data?.post?.title)
  setValue('description' , data?.post?.description)
},[])

return (
    <div>
        <h1>Update Post</h1>
        <p>{error && "invalid Data"}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>user_id : </label>
            <input type="text" value={id} {...register("user_id",{required:true})} />
            <p>{errors.user_id && "user_id is Required"}</p>
            <label>Title : </label>
            <input type="text" {...register("title",{required:true})} />
            <p>{errors.title && "Title is Required"}</p>
            <p></p>
            <label>Description : </label>
            <input type="text" {...register("description",{required:true})} />
            <p>{errors.title && "Description is Required"}</p>
            <p></p>
           {/* <input type="submit"  className="btn btn-sm btn-success"/> */}
           <button type="submit" className="btn btn-sm btn-success">Update</button>
        </form>
        <br />
        <button className = "btn btn-sm btn-primary" onClick={handleBack}>Back</button>
        <br />
    </div>
  )
}
