import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Loader from "react-spinners/PulseLoader";
import useFetch from "../customhooks/useFetch";

const UpdateBlog = () => {
    const { id } = useParams()      
    const{data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/'+id)
    
    const color= "#222"; 
    const override = {
        display: "block",
        margin: "0 auto",
    };
    const [isUpdateLoading, setIsUpdateLoading] = useState(false)
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        
        const updateTitle = e.currentTarget.title.value
        const updateDescription = e.currentTarget.description.value
        const updateAuthor = e.currentTarget.author.value
        
        const updateBlog = {title: updateTitle, description: updateDescription, author: updateAuthor}
        setIsUpdateLoading(true)
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateBlog)
        }).then(() => {
            console.log('Updated Blog')
            setIsUpdateLoading(false)
            navigate('/')
        })
    }

    return (     
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-between gap-8 py-[50px]">     
            <h1>Update Blog</h1>
            <div className="flex flex-col items-center">
                { error && <div><p className='errorMessage'>{error}</p></div>}
                { isLoading && 
                    <Loader
                    color={color}
                    loading={isLoading}
                    cssOverride={override}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loading"
                    />
                }
                {blog && (
                    <form className="updateBlog flex flex-col gap-3 w-1/2 box-shadow-1 p-8 rounded-lg" onSubmit={handleUpdate}>
                        <label className="font-bold">Blog Title</label>
                        <input id="title" className="rounded-lg p-2 border border-gray-400" type="text" defaultValue={blog.title} required></input>
                        
                        <label className="font-bold mt-4">Blog Description</label>
                        <textarea id="description" className="rounded-lg p-2 border border-gray-400" defaultValue={blog.description} required></textarea>
                        
                        <label className="font-bold mt-4">Blog Author</label>
                        <input id="author" className="rounded-lg p-2 border border-gray-400" type="text" defaultValue={blog.author} required></input>
                        
                        {!isUpdateLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5" type="submit">Update Blog</button>}
                        {isUpdateLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5" disabled>Updating blog...</button>}
                    </form>
                )}
            </div>
        </div>  
    );
}
 
export default UpdateBlog;