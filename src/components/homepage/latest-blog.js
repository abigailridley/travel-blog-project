import './latest-blog.css';
import { Link } from 'react-router-dom';
import seattle from "./img/gtown-mansion.jpg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/seattle-blog'>
            <button type='button' className='latest-blog-button'>
                <h4 className='blog-link-title'>Latest blog post</h4>
                <img src={seattle} alt='img' className='latest-blog-img'/>
                
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





