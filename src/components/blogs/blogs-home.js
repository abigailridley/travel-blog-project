import './blogs-home.css';
import { Link } from 'react-router-dom';
import seattle from "../homepage/img/gtown-mansion.jpg";
import portland from "../homepage/img/portland-w1.jpeg";
import MainMap from '../maps/main-map';

const Blogs = () => {
    return (
        <div className='blogs-page'>
           <h1 className='title'>Blogs</h1>
            <div className='blogs-container'>
                 
                <Link to='/portland-blog' className='blog-link'>
                    <button type='button' className='blog-button'> 
                    <h5>Portland, OR</h5>
                        <img src={portland} alt='img' className='blog-img'/>
                        <div className='location'>
                            <p>25.02.24 - 03.03.24</p>
                        </div>
                    </button>
                </Link> 
                <Link to='/seattle-blog' className='blog-link'>
                    <button type='button' className='blog-button'>
                    <h5>Seattle, WA</h5>
                        <img src={seattle} alt='img' className='blog-img'/>
                        <div className='location'>
                           
                            <p>17.02.24 - 25.02.24</p>
                        </div>
                    </button>
                </Link> 
               
            </div>
            <div className='main-map'> <MainMap /></div>
        </div>
    );
}

export default Blogs;



// import './blogs-home.css';
// import { Link } from 'react-router-dom';
// import seattle from "../homepage/img/gtown-mansion.jpg";
// import portland from "../homepage/img/portland-w1.jpeg"


// const Blogs = () => {
//     return (
//         <div className='body'>
//             <div className='blogs-container'>
//            <Link to='/portland-blog' className='blog-link'>
//             <button type='button' className='blog-button'> 
//                 <img src={portland} alt='img' className='blog-img'/>
//                 <div className='location'>
//                 <h5>Portland, OR</h5>
//                 <p>25.02.24 - 03.03.24</p>
//                 </div>
//             </button>
//             </Link> 
            
            
//             <Link to='/seattle-blog' className='blog-link'>
//             <button type='button' className='blog-button'>
//                 <img src={seattle} alt='img' className='blog-img'/>
//                 <div className='location'>
//                 <h5>Seattle, WA</h5>
//                 <p>17.02.24 - 25.02.24</p>
//                 </div>
//             </button>
//             </Link> 
//             </div>
//         </div>
//     );
// }

// export default Blogs;