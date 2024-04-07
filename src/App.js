
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import Blogs from './components/blogs/blogs-home.js';
import Maps from './components/maps/maps.js';
import AboutMe from './components/aboutme/index.js';
import Footer from './components/footer/footer.js';
import SeattleBlog from './components/blogs/seattle-blog'; 
import PortlandBlog from './components/blogs/portland-blog.js';
import OaklandSFBlog from './components/blogs/oakland-sf-blog.js';
import SanFranBlog from './components/blogs/sanfran-blog.js';
import SanFranBlogP2 from './components/blogs/sanfran-blog-p2.js';


function App() {
  
  return (
    <Router>
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/seattle-blog" element={<SeattleBlog />} />
          <Route path ="/blogs/portland-blog" element={<PortlandBlog/>}/>
          <Route path ="/blogs/oakland-sf-blog" element={<OaklandSFBlog/>}/>
          <Route path ="/blogs/sanfran-blog" element={<SanFranBlog/>}/>
          <Route path ="/blogs/sanfran-blog-p2" element={<SanFranBlogP2/>}/>
          <Route path = "/blogs" element={<Blogs/>}/>
          <Route path = "/map" element={<Maps/>}/>
          <Route path = "/aboutme" element={<AboutMe/>}/>

        </Routes>

      <Footer />
      </Router>
  );
}

export default App;
