import {useState} from 'react'
import BlogList from "../components/Blog-list";
import Loader from "react-spinners/PulseLoader";
import useFetch from '../customhooks/useFetch';

const Home = () => {
    const{data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    const [color, setColor] = useState("#222"); 
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
    };
    
    return ( 
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-betweek gap-12 py-[50px]">
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
            {blogs && <BlogList blogs={blogs}/>}            
        </div>
    );
}
 
export default Home;