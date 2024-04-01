import './latest-blog.css';
import { Link } from 'react-router-dom';
import oaklandsf from "./img/oaksf.jpeg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/oakland-sf-blog' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={oaklandsf} alt='img' className='latest-blog-img'/>
                <h4>San Francisco, CA</h4>
                <div className='date'>
                <p>16.03.24 - 24.03.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





