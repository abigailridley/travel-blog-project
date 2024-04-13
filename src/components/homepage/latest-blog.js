import './latest-blog.css';
import { Link } from 'react-router-dom';
import monterey from './img/monterey.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/monterey' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={monterey} alt='img' className='latest-blog-img'/>
                <h4>Monterey, CA</h4>
                <div className='date'>
                <p>06.04.24 - 11.04.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





