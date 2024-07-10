import './latest-blog.css';
import { Link } from 'react-router-dom';


import costarica from './img/costarica.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/costarica' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={costarica} alt='img' className='latest-blog-img'/>
                <h4>Tortuguero, <br/>Costa Rica</h4>
                <div className='date'>
                <p>1 July 24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





