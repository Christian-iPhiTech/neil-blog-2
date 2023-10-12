const BlogList = (props) => {
    const blogs = props.blogs
    return ( 
        <div className="blog-list flex flex-row flex-wrap justify-evenly gap-12">
            {blogs.map((blogs) => (
                <div className="blog-items box-shadow-1 p-[30px] flex flex-col justify-between gap-3 w-[48%]" key={blogs.id}>
                    <h3>{blogs.title}</h3>
                    <p>{blogs.description}</p>
                    <p>Written by: <span className="font-bold">{blogs.author}</span></p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;