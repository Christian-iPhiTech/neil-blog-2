import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-center gap-12 py-[50px]">
            <h1>404 Page Not Found</h1>        
            <Link to="/">Back to the homepage...</Link>   
        </div>
    );
}
 
export default NotFound;