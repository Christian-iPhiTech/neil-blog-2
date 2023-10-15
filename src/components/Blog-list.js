import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete
    const isDeleting = props.isDeleting

    return ( 
        <div className="blog-list flex flex-row flex-wrap justify-evenly gap-12">
            {blogs.map((blogs) => (
                    <div className="blog-items box-shadow-1 p-[30px] w-[48%] flex flex-col justify-between gap-3" key={blogs.id}>
                        <Link to={`/blogs/${blogs.title}/${blogs.id}`}>
                            <h3 className="capitalize">{blogs.title}</h3>
                        </Link>
                        <p>{blogs.description}</p>
                        <p>Written by: <span className="font-bold capitalize">{blogs.author}</span></p>
                        <div className="flex flex-row flex-wrap justify-end gap-7">
                            <button className="rounded-lg p-3 bg-green-500 text-white font-bold">Update</button>
                            {!isDeleting && <button className="rounded-lg p-3 bg-red-500 text-white font-bold" onClick={() => {handleDelete(blogs.id)}}>Delete</button>}
                            {isDeleting && <button className="rounded-lg p-3 bg-red-500 text-white font-bold" disabled>Deleting Blogs...</button>}
                        </div>
                    </div>
            ))}
        </div>
    );
}
 
export default BlogList;