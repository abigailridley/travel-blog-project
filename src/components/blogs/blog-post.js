import { useParams } from 'react-router-dom';
import Gallery from '../gallery/gallery'
import BlogData from './blog-data';
import CostaRica from './locations/costarica'
import MexicoCity from './locations/cdmx'
import SanMiguel from './locations/sanmiguel'
import Guadalajara from './locations/guadalajara'
import SanPancho from './locations/sanpancho'
import SantaMonica from './locations/santamonica'
import LosAngeles from './locations/culvercity'
import Monterey from './locations/monterey-blog'
import SanFran2 from './locations/sanfran-blog-p2'
import SanFran from './locations/sanfran-blog'
import Oakland from './locations/oakland-sf-blog'
import Portland from './locations/portland-blog'
import Seattle from './locations/seattle-blog'
import NotFound from './locations/not-found'

const BlogPost = () => {
    const { slug } = useParams();

    const blogPost = BlogData.find(blog => blog.slug === slug);

    if (!blogPost) {
        return <NotFound />
    }

    let BlogComponent = null;

    switch (slug) {
        case 'mexicocity':
            BlogComponent = <MexicoCity />;
            break;
        case 'costarica':
            BlogComponent = <CostaRica />;
            break;
        case 'sanmigueldeallende':
            BlogComponent = <SanMiguel />;
            break;
        case 'guadalajara':
            BlogComponent = <Guadalajara />;
            break;
        case 'sanpancho':
            BlogComponent = <SanPancho />;
            break;
        case 'santamonica':
            BlogComponent = <SantaMonica />;
            break;
        case 'culvercity':
            BlogComponent = <LosAngeles />;
            break;
        case 'monterey':
            BlogComponent = <Monterey />;
            break;
        case 'san-francisco-2':
            BlogComponent = <SanFran2 />;
            break;
        case 'san-francisco':
            BlogComponent = <SanFran />;
            break;
        case 'oakland':
            BlogComponent = <Oakland />;
            break;
        case 'portland':
            BlogComponent = <Portland />;
            break;
        case 'seattle':
            BlogComponent = <Seattle />;
            break;
        default:
            BlogComponent = <NotFound />;
            break;
    }

    return (
        <div className='blog-post'>
            <div className='blog-content'>
                {BlogComponent}
            </div>
            <div className='gallery'>
                <Gallery images={blogPost.galleryImages} />
            </div>
        </div>
    )
}

export default BlogPost;