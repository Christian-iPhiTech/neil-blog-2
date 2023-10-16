import BlogList from "../components/Blog-list";
import Loader from "react-spinners/PulseLoader";
import useFetch from '../customhooks/useFetch';
import { useState } from "react";

const Home = () => {
    const{data: blogs, isLoading, error, deleteBlog} = useFetch('http://localhost:8000/blogs')
    const [isDeleting, setIsDeleting] = useState({
        loading: false, id: null
    })

    const color= "#222"; 
    const override = {
        display: "block",
        margin: "0 auto",
    };

    const handleDelete = (id) => {
        setIsDeleting({loading: true, id})
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/'+id,{
                method: 'DELETE'
            }).then(() => {
                deleteBlog(id)
                setIsDeleting({loading: false, id})
            })
        }, 1000)
    }
    
    return ( 
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-between gap-12 py-[50px]">
            <h1>Blogs to my welcome</h1>
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
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} isDeleting={isDeleting}/>}            
        </div>
    );
}
 
export default Home;