import './latest-blog.css';
import { Link } from 'react-router-dom';
import seattle from "./img/gtown-mansion.jpg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/seattle-blog' className='blog-link'>
            <button type='button' className='latest-blog-button'>
                <h4 >Latest blog post</h4>
                <img src={seattle} alt='img' className='latest-blog-img'/>
                <h5>Seattle, WA</h5>
                <p>17.02.24 - 25.02.24</p>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





