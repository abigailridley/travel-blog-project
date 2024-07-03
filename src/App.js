
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import Blogs from './components/blogs/blogs-home.js';
import MainMap from './components/maps/main-map.js';
import About from './components/about/index.js';
import Footer from './components/footer/footer.js';
import BlogPost from './components/blogs/blogpost.js'

//blogs
import SeattleBlog from './components/blogs/seattle-blog'; 
import PortlandBlog from './components/blogs/portland-blog.js';
import OaklandSFBlog from './components/blogs/oakland-sf-blog.js';
import SanFranBlog from './components/blogs/sanfran-blog.js';
import SanFranBlogP2 from './components/blogs/sanfran-blog-p2.js';
import MontereyBlog from './components/blogs/monterey-blog.js';
import CulverCityBlog from './components/blogs/culvercity.js';
import SantaMonicaBlog from './components/blogs/santamonica.js'
import SanPancho from './components/blogs/sanpancho.js';
import Guadalajara from './components/blogs/guadalajara.js';
import SanMiguel from './components/blogs/sanmiguel.js';
import MexicoCity from './components/blogs/cdmx.js';


function App() {
  
  return (
    <Router>
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/seattle" element={<SeattleBlog />} />
          <Route path ="/blogs/portland" element={<PortlandBlog/>}/>
          <Route path ="/blogs/oakland-sf" element={<OaklandSFBlog/>}/>
          <Route path ="/blogs/sanfran" element={<SanFranBlog/>}/>
          <Route path ="/blogs/sanfran-p2" element={<SanFranBlogP2/>}/>
          <Route path ="/blogs/monterey" element={<MontereyBlog/>}/>
          <Route path ="/blogs/culvercity" element={<CulverCityBlog/>}/>
          <Route path ="/blogs/santamonica" element={<SantaMonicaBlog/>}/>
          <Route path ="/blogs/sanpancho" element={<SanPancho/>}/>
          <Route path ="/blogs/guadalajara" element={<Guadalajara/>}/>
          <Route path ="/blogs/sanmigueldeallende" element={<SanMiguel/>}/>
          <Route path ="/blogs/mexicocity" element={<MexicoCity/>}/>
          <Route path = "/blogs" element={<Blogs/>}/>
          <Route path = "/map" element={<MainMap/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path="/blogs/:slug" element={<BlogPost/>} />
        </Routes>

      <Footer />
      </Router>
  );
}

export default App;
