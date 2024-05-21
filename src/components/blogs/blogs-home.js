import './blogs-home.css';
import { Link } from 'react-router-dom';
import seattle from "../homepage/img/gtown-mansion.jpg";
import portland from "../homepage/img/portland-w1.jpeg";
import oaksf from "../homepage/img/oaksf.jpeg";
import sanfran from "../homepage/img/sanfran.jpeg";
import sanfranp2 from "../homepage/img/sanfranp2.jpeg";
import monterey from '../homepage/img/monterey.jpeg';
import culvercity from '../homepage/img/culvercity.jpeg';
import santamonica from '../homepage/img/santamonica.jpeg';
import MainMap from '../maps/main-map';

const blogData = [
    { to: '/blogs/santamonica', title: 'Santa Monica, CA', img: santamonica, date: '21.04.24 - 06.04.24' },
    { to: '/blogs/culvercity', title: 'Los Angeles, CA', img: culvercity, date: '11.04.24 - 21.04.24' },
    { to: '/blogs/monterey', title: 'Monterey, CA', img: monterey, date: '06.04.24 - 11.04.24' },
    { to: '/blogs/sanfran-p2', title: 'San Francisco, CA', img: sanfranp2, date: '31.03.24 - 06.04.24' },
    { to: '/blogs/sanfran', title: 'San Francisco, CA', img: sanfran, date: '25.03.24 - 31.03.24' },
    { to: '/blogs/oakland-sf', title: 'San Francisco, CA', img: oaksf, date: '15.03.24 - 25.03.24' },
    { to: '/blogs/portland', title: 'Portland, OR', img: portland, date: '25.02.24 - 15.03.24' },
    { to: '/blogs/seattle', title: 'Seattle, WA', img: seattle, date: '17.02.24 - 25.02.24' }
];

const BlogLink = ({ to, title, img, date }) => (
    <Link to={to} className='blog-link'>
        <button type='button' className='blog-button'>
            <h5>{title}</h5>
            <img src={img} alt='img' className='blog-img' />
            <div className='location'>
                <p>{date}</p>
            </div>
        </button>
    </Link>
);

const Blogs = () => {
    return (
        <div className='blogs-page'>
            <h1 className='title'>Blogs</h1>
            <div className='container'>
                <div className='main-map'> <MainMap /></div>
                {blogData.map((blog, index) => (
                    <BlogLink key={index} {...blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;