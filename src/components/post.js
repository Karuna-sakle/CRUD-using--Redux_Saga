import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/actions/post';
import React from 'react'

export const CreatePost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const error = useSelector(state => state.posts.error)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    dispatch(createPost(data))
    navigate("/dashboard")
  }
  
  return (
    <>
      <div>
        <h1>Create Post</h1>
        <p>{error && "invalid Data"}</p>  
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 ">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Title</label>
          <div class="sm-">
          <input type="text" className ="form-control"  {...register("title", { required: true })} />
          <p>{errors.title && "Title is Required"}</p>
          </div>
         </div>
         <div className="mb-3">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Description</label>
          <div class="sm-5">
          <input type="text" className ="form-control" {...register("description", { required: true })} />
         </div>
          <p>{errors.title && "Description is Required"}</p>
          </div>
          <input type="submit" className="btn btn-sm btn-success" />
        </form>
      </div>

    </>
  )
}
