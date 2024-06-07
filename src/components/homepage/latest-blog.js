import './latest-blog.css';
import { Link } from 'react-router-dom';

import sanpancho from './img/sanpancho.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/sandiego-sanpancho' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={sanpancho} alt='img' className='latest-blog-img'/>
                <h4>San Pancho, Mexico</h4>
                <div className='date'>
                <p>23 May 2024</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





