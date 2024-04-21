import './latest-blog.css';
import { Link } from 'react-router-dom';

import culvercity from './img/culvercity.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/losangeles' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={culvercity} alt='img' className='latest-blog-img'/>
                <h4>Los Angeles, CA</h4>
                <div className='date'>
                <p>11.04.24 - 21.04.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





