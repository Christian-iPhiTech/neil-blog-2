import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, description, author}
        setIsLoading(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Created Blog')
            setIsLoading(false)
            navigate('/')
        })
    }

    return (  
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-between gap-8 py-[50px]">
            <h1>Create Blog</h1>
            <div className="flex flex-col items-center">
                <form className="createBlog flex flex-col gap-3 w-1/2 box-shadow-1 p-8 rounded-lg" onSubmit={handleSubmit}>
                    <label className="font-bold">Blog Title</label>
                    <input className="rounded-lg p-2 border border-gray-400" 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    ></input>

                    <label className="font-bold mt-4">Blog Description</label>
                    <textarea className="rounded-lg p-2 border border-gray-400" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    ></textarea>

                    <label className="font-bold mt-4">Blog Author</label>
                    {/* <select className="rounded-lg p-2 border border-gray-400" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    >
                        <option value="none" selected hidden>Select an Option</option>
                        <option value="Superman">Superman</option>
                        <option value="Wonder Woman">Wonder Woman</option>
                        <option value="The Flash">The Flash</option>
                        <option value="Green Lantern">Green Lantern</option>
                    </select> */}
                    <input className="rounded-lg p-2 border border-gray-400" 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    ></input>


                    {!isLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5">Create Blog</button>}
                    {isLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5" disabled>Creating blog...</button>}
                </form>
            </div>
        </div>
    );
}
 
export default CreateBlog;