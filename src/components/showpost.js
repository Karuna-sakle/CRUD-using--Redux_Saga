import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const ShowPost = () => {
    const post = useSelector(state => state.posts.singleUser)
    const navigate = useNavigate();

    useEffect(() => {

    }, [post])

    const handleBack = () => {
        navigate("/dashboard")
    }

    return (
        <div>
            <h2>View Data</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>User_Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        {/* <td>{post?.post?.id}</td>
                        <td>{post?.post?.user_id}</td>
                        <td>{post?.post?.title}</td>
                        <td>{post?.post?.description}</td> */}
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={handleBack} class="btn btn-warning" >Back</button>
        </div>
    )
}
