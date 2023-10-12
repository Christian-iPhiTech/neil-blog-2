import {useState, useEffect} from 'react'
import BlogList from "../components/Blog-list";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to Become a Superhero', description: 'Learn the steps to become a real-life superhero and save the day!', author: 'Superman', id: 1 },
        { title: 'Gotham\'s Dark Knight: The Story of Batman', description: 'Discover the origin and journey of Batman in Gotham City.', author: 'Wonder Woman', id: 2 },
        { title: 'The Bat-Signal: A Beacon of Hope', description: 'Explore the significance of the Bat-Signal in Batman\'s crime-fighting world.', author: 'The Flash', id: 3 },
        { title: 'Batmobile: Engineering Marvel of the Dark Knight', description: 'Uncover the secrets behind the iconic Batmobile design.', author: 'Green Lantern', id: 4 }
    ])    
    useEffect(() => {
        
    }, [])
    return ( 
        <div className="max-w-screen-xl w-full flex flex-col justify-center items-betweek gap-12 py-[50px]">
            <h1>Blogs to my welcome</h1>
            <BlogList blogs={blogs}/>
        </div>
    );
}
 
export default Home;