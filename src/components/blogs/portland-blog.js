import Gallery from '../gallery/gallery'
import './blog-post.css'
import PortlandWeekOne from './portland-week-one';
import PortlandWeekTwo from './portland-week-two';
import PortlandWeekThree from './portland-week-three';

const images = [
    { src: require('./img/portland/week-three/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/portland/week-three/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/portland/week-three/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/portland/week-three/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/portland/week-three/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/portland/week-three/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/portland/week-three/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/portland/week-three/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/portland/week-three/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/portland/week-three/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/portland/week-two/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/portland/week-two/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/portland/week-two/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/portland/week-two/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/portland/week-two/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/portland/week-two/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/portland/week-two/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/portland/week-two/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/portland/week-two/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/portland/week-two/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/portland/week-two/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/portland/week-two/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/portland/week-one/img1.jpeg'), alt: 'Image 1' },
    { src: require('./img/portland/week-one/img2.jpeg'), alt: 'Image 2' },
    { src: require('./img/portland/week-one/img3.jpeg'), alt: 'Image 3' },
    { src: require('./img/portland/week-one/img4.jpeg'), alt: 'Image 4' },
    { src: require('./img/portland/week-one/img5.jpeg'), alt: 'Image 5' },
    { src: require('./img/portland/week-one/img6.jpeg'), alt: 'Image 6' },
    { src: require('./img/portland/week-one/img7.jpeg'), alt: 'Image 7' },
    { src: require('./img/portland/week-one/img8.jpeg'), alt: 'Image 8' },
    { src: require('./img/portland/week-one/img9.jpeg'), alt: 'Image 9' },
    { src: require('./img/portland/week-one/img10.jpeg'), alt: 'Image 10' },
    { src: require('./img/portland/week-one/img11.jpeg'), alt: 'Image 11' },
    { src: require('./img/portland/week-one/img12.jpeg'), alt: 'Image 12' },
    { src: require('./img/portland/week-one/img13.jpeg'), alt: 'Image 13' }
 

  ];

  const PortlandBlog = () => {
    return ( 
        <div className="container portland-blog blog-post">
            <h1>Portland, Oregon</h1>
            <div className='date'>
            <p>25.02.24 - 15.03.24</p>
            </div>
            <div className='blog-container'>
            <p className='weeks'>Week Three</p>
            <p><PortlandWeekThree/></p>
            <p className='date-posted'>Posted on Saturday 16.03.24</p>
            <p className='weeks'>Week Two</p>
            <p><PortlandWeekTwo/></p>
            <p className='date-posted'>Posted on Monday 11.03.24</p>
                <p className='weeks'>Week One</p>
            <p><PortlandWeekOne/></p>
            <p className='date-posted'>Posted on Monday 04.03.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default PortlandBlog;