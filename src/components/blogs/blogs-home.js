import './blogs-home.css';
import { Link } from 'react-router-dom';
import seattle from "../homepage/img/gtown-mansion.jpg";
import portland from "../homepage/img/portland-w1.jpeg";
import oaksf from "../homepage/img/oaksf.jpeg";
import sanfran from "../homepage/img/sanfran.jpeg"
import sanfranp2 from "../homepage/img/sanfranp2.jpeg"
import monterey from '../homepage/img/monterey.jpeg'
import culvercity from '../homepage/img/culvercity.jpeg'
import santamonica from '../homepage/img/santamonica.jpeg'
import MainMap from '../maps/main-map';

const Blogs = () => {
    return (
        <div className='blogs-page'>
           <h1 className='title'>Blogs</h1>
            <div className='container'>
            <div className='main-map'> <MainMap /></div>
            <Link to='/blogs/santamonica' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>Santa Monica, CA</h5>
                        <img src={santamonica} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>21.04.24 - 06.04.24</p>
                        </div>
                    </button>
                </Link> 
            <Link to='/blogs/culvercity' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>Los Angeles, CA</h5>
                        <img src={culvercity} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>11.04.24 - 21.04.24</p>
                        </div>
                    </button>
                </Link> 
            <Link to='/blogs/monterey' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>Monterey, CA</h5>
                        <img src={monterey} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>06.04.24 - 11.04.24</p>
                        </div>
                    </button>
                </Link> 
            <Link to='/blogs/sanfran-p2' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>San Francisco, CA</h5>
                        <img src={sanfranp2} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>31.03.24 - 06.04.24</p>
                        </div>
                    </button>
                </Link> 
            <Link to='/blogs/sanfran' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>San Francisco, CA</h5>
                        <img src={sanfran} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>25.03.24 - 31.03.24</p>
                        </div>
                    </button>
                </Link> 
            <Link to='/blogs/oakland-sf' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>San Francisco, CA</h5>
                        <img src={oaksf} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>15.03.24 - 25.03.24</p>
                        </div>
                    </button>
                </Link> 
                <Link to='/blogs/portland' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>Portland, OR</h5>
                        <img src={portland} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>25.02.24 - 15.03.24</p>
                        </div>
                    </button>
                </Link> 
                <Link to='/blogs/seattle'>
                    <button type='button' className='blog-button'>
                    <h5>Seattle, WA</h5>
                        <img src={seattle} alt='img' className='blog-img'/>
                        <div className='location'>
                           
                            <p>17.02.24 - 25.02.24</p>
                        </div>
                    </button>
                </Link> 
                
            
            
            </div>
        </div>
    );
}

export default Blogs;
