
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import Blogs from './components/blogs/blogs-home.js';
import Maps from './components/maps/maps.js';
import About from './components/about/index.js';
import Footer from './components/footer/footer.js';
import SeattleBlog from './components/blogs/seattle-blog'; 
import PortlandBlog from './components/blogs/portland-blog.js';
import OaklandSFBlog from './components/blogs/oakland-sf-blog.js';
import SanFranBlog from './components/blogs/sanfran-blog.js';
import SanFranBlogP2 from './components/blogs/sanfran-blog-p2.js';
import MontereyBlog from './components/blogs/monterey-blog.js';
import CulverCityBlog from './components/blogs/culvercity.js';
import SantaMonicaBlog from './components/blogs/santamonica.js'
import SanDiegoSanPancho from './components/blogs/sandiego-sanpancho.js';


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
          <Route path ="/blogs/sandiego-sanpancho" element={<SanDiegoSanPancho/>}/>
          <Route path = "/blogs" element={<Blogs/>}/>
          <Route path = "/map" element={<Maps/>}/>
          <Route path = "/about" element={<About/>}/>
        </Routes>

      <Footer />
      </Router>
  );
}

export default App;
