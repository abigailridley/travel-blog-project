import './latest-blog.css';
import { Link } from 'react-router-dom';

import santamonica from './img/santamonica.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/santamonica' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={santamonica} alt='img' className='latest-blog-img'/>
                <h4>Santa Monica, CA</h4>
                <div className='date'>
                <p>11.04.24 - 21.04.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





