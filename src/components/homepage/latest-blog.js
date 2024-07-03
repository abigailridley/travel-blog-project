import './latest-blog.css';
import { Link } from 'react-router-dom';

import cdmx from './img/cdmx.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/mexicocity' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={cdmx} alt='img' className='latest-blog-img'/>
                <h4>Mexico City, Mexico</h4>
                <div className='date'>
                <p>9 June 24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





