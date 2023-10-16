import { useParams } from "react-router-dom";
import Loader from "react-spinners/PulseLoader";
import useFetch from '../customhooks/useFetch';
import { useNavigate } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams()  
    const{data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate()
    const color= "#222"; 
    const override = {
        display: "block",
        margin: "0 auto",
    };

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-between gap-12 py-[50px]">                   
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
                <article className="flex flex-col justify-between items-start gap-3">
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <p>Written by: <span className="font-bold">{blog.author}</span></p>
                    <button className="rounded-lg p-3 bg-red-500 text-white font-bold mt-5" onClick={handleDelete}>Remove Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;