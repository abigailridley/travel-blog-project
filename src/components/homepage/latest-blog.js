import './latest-blog.css';
import { Link } from 'react-router-dom';
import sanfran from "./img/sanfran.jpeg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/sanfran-blog' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={sanfran} alt='img' className='latest-blog-img'/>
                <h4>San Francisco, CA</h4>
                <div className='date'>
                <p>23.03.24 - 31.03.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





