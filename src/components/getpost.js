import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, getPost, showPost} from '../redux/actions/post'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

export const ListPost = () => {
    const getdata = useSelector(state => state.posts.posts)
    const delepost = useSelector(state => state.posts.dele)
    const updatepost = useSelector(state => state.posts.updt)
    const [startdate ,setNewDate] = useState (new Date())

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPost())
    }, [delepost,updatepost])

    const handleDelete=(id)=>{
        console.log("delete",id)
        dispatch(deletePost(id))
    }

    const handleupdate = (id) =>{
        navigate(`/update/${id}`)
    }
    
    const handleClick=(id)=>{
        console.log(76767,id)
        dispatch(showPost(id))
        navigate(`/showpost/${id}`)
    }
    
    return (
        <div>
           
                        <table className="table table-striped">
                        <thead>
                           <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Updated Date</th>
                            <th scope="col">View</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                            </tr>
                         </thead>
                         <tbody>
                          {getdata?.posts?.length > 0 && getdata.posts.map((post, index) => {
                           return (
                                <tr key={index}>
                                    <td >{post.title}</td>
                                    <td>{post.description}</td>
                                    <td>{post.created_at}</td>
                                    <td>{post.updated_at}</td>
                                    <td><button className="btn btn-info" onClick={()=>handleClick(post.id)}>View</button></td>
                                    <td><button style={{color:"black"}} class="btn btn-warning" onClick={()=>handleupdate(post.id)}>Edit</button></td> 
                                    <td><button  style={{color:"black"}} className="btn btn-danger" onClick={()=>handleDelete(post.id)}>Delete</button></td>
                               </tr>

                            )
                            })}</tbody>
                        </table>
                        </div>
    )
}
