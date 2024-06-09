import './latest-blog.css';
import { Link } from 'react-router-dom';

import gdl from './img/gdl.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/guadalajara' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={gdl} alt='img' className='latest-blog-img'/>
                <h4>Guadalajara, Mexico</h4>
                <div className='date'>
                <p>30 May 2024</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





