import './latest-blog.css';
import { Link } from 'react-router-dom';
import portland from "./img/portland-w3.jpeg";


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/portland-blog' className='blog-link'>
            <button type='button' className='latest-blog-button'>
            <h4>Portland, OR</h4>
                <img src={portland} alt='img' className='latest-blog-img'/>
                <div className='date'>
                <p>10.03.24 - 15.03.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





