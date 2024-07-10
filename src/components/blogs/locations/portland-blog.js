
import '../blog-post.css'
import PortlandWeekOne from './portland-week-one';
import PortlandWeekTwo from './portland-week-two';
import PortlandWeekThree from './portland-week-three';

  const PortlandBlog = () => {
    return ( 
        <div className="container portland-blog blog-post">
            <h1>Portland, Oregon</h1>
            <div className='date'>
            <p>25.02.24 - 15.03.24</p>
            </div>
            <div className='blog-container'>
            <p className='weeks'>Week One</p>
            <p><PortlandWeekOne/></p>
            <p className='date-posted'>Posted on Monday 04.03.24</p>
            <p className='weeks'>Week Two</p>
            <p><PortlandWeekTwo/></p>
            <p className='date-posted'>Posted on Monday 11.03.24</p>
            <p className='weeks'>Week Three</p>
            <p><PortlandWeekThree/></p>
            <p className='date-posted'>Posted on Saturday 16.03.24</p>
        
               
           </div>
        </div>
    )
}

export default PortlandBlog;