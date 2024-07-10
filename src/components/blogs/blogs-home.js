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
import sanpancho from '../homepage/img/sanpancho.jpeg'
import gdl from '../homepage/img/gdl.jpeg'
import sma from '../homepage/img/sma.jpeg'
import cdmx from '../homepage/img/cdmx.jpeg'
import costarica from '../homepage/img/costarica.jpeg'



const blogData = [
    { to: '/blogs/costarica', place: 'Tortuguero', country:'Costa Rica', img: costarica, date: '01 July 24'},
    { to: '/blogs/mexicocity', place: 'Mexico City', country:'Mexico', img: cdmx, date: '09 June 24'},
    { to: '/blogs/sanmigueldeallende', place: 'San Miguel de Allende', country:'Mexico', img: sma, date: '30 May 24'},
    { to: '/blogs/guadalajara', place: 'Guadalajara', country:'Mexico', img: gdl, date: '23 May 24' },
    { to: '/blogs/sanpancho', place: 'San Pancho', country:'Mexico', img: sanpancho, date: '06 May 24' },
    { to: '/blogs/santamonica', place: 'Santa Monica, CA', country:'USA', img: santamonica, date: '21 April 24' },
    { to: '/blogs/culvercity', place: 'Los Angeles, CA', country:'USA', img: culvercity, date: '11 April 24' },
    { to: '/blogs/monterey', place: 'Monterey, CA', country:'USA', img: monterey, date: '6 April 24' },
    { to: '/blogs/sanfran-p2', place: 'San Francisco, CA', country:'USA', img: sanfranp2, date: '31 March 24' },
    { to: '/blogs/sanfran', place: 'San Francisco, CA', country:'USA', img: sanfran, date: '23 March 24' },
    { to: '/blogs/oakland-sf', place: 'San Francisco, CA', country:'USA', img: oaksf, date: '15 March 24' },
    { to: '/blogs/portland', place: 'Portland, OR', country:'USA', img: portland, date: '25 February 24' },
    { to: '/blogs/seattle', place: 'Seattle, WA', country:'USA', img: seattle, date: '17 February 24' }
];

const BlogLink = ({ to, place, country, img, date }) => (
    <Link to={to} className='blog-link'>
        <button type='button' className='blog-button'>
            <h5 className='place'><div>{place}</div>
            <div>{country}</div></h5>
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
                {blogData.map((blog, index) => (
                    <BlogLink key={index} {...blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;