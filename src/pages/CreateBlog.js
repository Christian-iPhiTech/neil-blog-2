import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        const createTitle = e.currentTarget.title.value
        const createDescription = e.currentTarget.description.value
        const createAuthor = e.currentTarget.author.value
        
        const blog = {title: createTitle, description: createDescription, author: createAuthor}
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
                    <input id="title" className="rounded-lg p-2 border border-gray-400" type="text" required></input>

                    <label className="font-bold mt-4">Blog Description</label>
                    <textarea id="description" className="rounded-lg p-2 border border-gray-400" required></textarea>

                    <label className="font-bold mt-4">Blog Author</label>
                    <input id="author" className="rounded-lg p-2 border border-gray-400" type="text" required></input>

                    {!isLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5" type="submit">Create Blog</button>}
                    {isLoading && <button className="rounded-lg p-3 bg-blue-500 text-white font-bold mt-5" disabled>Creating blog...</button>}
                </form>
            </div>
        </div>
    );
}
 
export default CreateBlog;