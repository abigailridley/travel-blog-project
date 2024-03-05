import './latest-blog.css';
import { Link } from 'react-router-dom';
import portland from "./img/portland-w1.jpeg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/portland-blog' className='blog-link'>
            <button type='button' className='latest-blog-button'>
                <h4 >Latest blog post</h4>
                <img src={portland} alt='img' className='latest-blog-img'/>
                <div className='location'>
                <h5>Portland, OR</h5>
                <p>25.02.24 - 03.03.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





