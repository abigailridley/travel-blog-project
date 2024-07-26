import './latest-blog.css';
import { Link } from 'react-router-dom';



import bogota from './img/bogota.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/bogota' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={bogota} alt='img' className='latest-blog-img'/>
                <h4>Bogotá, <br/>Colombia</h4>
                <div className='date'>
                <p>9 July 24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





