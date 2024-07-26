import { useParams, Link } from 'react-router-dom';
import Gallery from '../gallery/gallery';
import BlogData from './blog-data';

// Import blog components
import Bogota from './locations/bogota'
import CostaRica from './locations/costarica';
import MexicoCity from './locations/cdmx';
import SanMiguel from './locations/sanmiguel';
import Guadalajara from './locations/guadalajara';
import SanPancho from './locations/sanpancho';
import SantaMonica from './locations/santamonica';
import LosAngeles from './locations/culvercity';
import Monterey from './locations/monterey-blog';
import SanFran2 from './locations/sanfran-blog-p2';
import SanFran from './locations/sanfran-blog';
import Oakland from './locations/oakland-sf-blog';
import Portland from './locations/portland-blog';
import Seattle from './locations/seattle-blog';
import NotFound from './locations/not-found';

const BlogPost = () => {
    const { slug } = useParams();

    const blogPost = BlogData.find(blog => blog.slug === slug);

    if (!blogPost) {
        return <NotFound />;
    }

    // Find the index of the current blog post in BlogData array
    const currentIndex = BlogData.findIndex(blog => blog.slug === slug);

    // Determine previous and next blog posts
    const prevBlog = currentIndex < BlogData.length - 1 ? BlogData[currentIndex + 1] : null;
    const nextBlog = currentIndex > 0 ? BlogData[currentIndex - 1] : null;

    // Render the corresponding blog component based on slug
    let BlogComponent = null;

    switch (slug) {
        case 'bogota':
            BlogComponent = <Bogota />;
            break;
        case 'costarica':
            BlogComponent = <CostaRica />;
            break;
        case 'mexicocity':
            BlogComponent = <MexicoCity />;
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
            return <NotFound />;
    }

    return (
        <div className='blog-post'>
            <div className='blog-content'>
                {BlogComponent}
            </div>
            <div className='gallery'>
                <Gallery images={blogPost.galleryImages} />
            </div>

            {/* Previous and Next Blog Navigation */}
            <div className='blog-navigation'>
                {prevBlog && (
                    <Link to={`/blogs/${prevBlog.slug}`} className='prev-blog'>
                        <div className='blog-index'>PREVIOUS BLOG</div>
                        <div className='thumbnail'>
                            <img src={prevBlog.thumbnail} alt='Previous Blog Thumbnail' />
                        </div>
                        <div className='title'><div>{prevBlog.place},</div><div>{prevBlog.country}</div></div>
                    </Link>
                )}

                {nextBlog && (
                    <Link to={`/blogs/${nextBlog.slug}`} className='next-blog'>
                         <div className='blog-index'>NEXT BLOG</div>
                        <div className='thumbnail'>
                            <img src={nextBlog.thumbnail} alt='Next Blog Thumbnail' />
                        </div>
                        <div className='title'><div>{nextBlog.place},</div><div>{nextBlog.country}</div></div>
            
                    </Link>
                )}
            </div>
        </div>
    );
};

export default BlogPost;
