import Gallery from '../gallery/gallery'
import './blog-post.css'
import PortlandWeekOne from './portland-week-one';

const images = [
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
        <div className="container portland-blog">
            <h1>Portland Blog</h1>
            <div className='location-date'>
            <h5>Portland, Oregon</h5>
            <p>25.02.24 - 03.03.24</p>
            </div>
            <div className='blog-container'>
            <p><PortlandWeekOne/></p>
            <p className='date-posted'>Posted on Monday 04.04.24</p>
            </div>
            <div className='gallery'>
<Gallery images={images}/>

            </div>
        </div>
    )
}

export default PortlandBlog;