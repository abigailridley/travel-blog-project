import './latest-blog.css';
import { Link } from 'react-router-dom';
import sanfranp2 from "./img/sanfranp2.jpeg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/sanfran-blog' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={sanfranp2} alt='img' className='latest-blog-img'/>
                <h4>San Francisco, CA</h4>
                <div className='date'>
                <p>31.03.24 - 07.04.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





