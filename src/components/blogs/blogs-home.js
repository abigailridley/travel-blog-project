import './blogs-home.css';
import { Link } from 'react-router-dom';
import BlogData from './blog-data';

const BlogsHome = () => {
    return (
<div className='blogs-page'>
    <h1 className='title'>Blogs</h1>
    <div className='container'>
        {BlogData.map((blog, index) => (
            <div key={index} className='blog-preview'>
                <Link to={`/blogs/${blog.slug}`} className='blog-link'>
                    <div className='blog-thumbnail'>
                        <img src={blog.thumbnail} alt='Blog thumbnail' />
                    </div>
                    <div className='blog-info'>
                        <h3><div>{blog.place}</div><div>{blog.country}</div>
                        <p>{blog.date}</p></h3>
                    </div>
                </Link>
            </div>
        ))}
    </div>
</div>
    )
}


export default BlogsHome;
