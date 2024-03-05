import './blogs-home.css';
import { Link } from 'react-router-dom';
import seattle from "../homepage/img/gtown-mansion.jpg";
import portland from "../homepage/img/portland-w1.jpeg"


const Blogs = () => {
    return (
        <div className='latest-blog'>
           <Link to='/portland-blog' className='blog-link'>
            <button type='button'>
                <img src={portland} alt='img' className='latest-blog-img'/>
                <div className='location'>
                <h5>Portland, OR</h5>
                <p>25.02.24 - 03.03.24</p>
                </div>
            </button>
            </Link> 
            <Link to='/seattle-blog' className='blog-link'>
            <button type='button'>
                <img src={seattle} alt='img' className='latest-blog-img'/>
                <div className='location'>
                <h5>Seattle, WA</h5>
                <p>17.02.24 - 25.02.24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default Blogs;