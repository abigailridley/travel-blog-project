import './latest-blog.css';
import { Link } from 'react-router-dom';

import riodejaneiro from './img/riodejaneiro.jpeg'

const LatestBlog = () => {
    return (
        <div className='latest-blog'>
            <h3>Latest Blog</h3> {/* Move Latest Blog heading outside the button */}
            <Link to='/blogs/riodejaneiro' className='latest-blog-link'>
                <button type='button' className='latest-blog-button'>
                    <img src={riodejaneiro} alt='img' className='latest-blog-img'/>
                    <h4>Rio de Janeiro, <br/>Brasil</h4>
                    <div className='date'>
                        <p>31 July 24</p>
                    </div>
                </button>
            </Link>
        </div>
    );
}

export default LatestBlog;
