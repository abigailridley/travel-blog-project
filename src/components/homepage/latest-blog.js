import './latest-blog.css';
import { Link } from 'react-router-dom';




import guatape from './img/guatape.jpeg'


const LatestBlog = () => {
    return (
        <div className='latest-blog'>
           <Link to='/blogs/guatape' >
            <button type='button' className='latest-blog-button'>
            <h3>Latest Blog</h3>
                <img src={guatape} alt='img' className='latest-blog-img'/>
                <h4>Guatapé, <br/>Colombia</h4>
                <div className='date'>
                <p>23 July 24</p>
                </div>
            </button>
            </Link> 
            
        </div>
    );
}

export default LatestBlog;





