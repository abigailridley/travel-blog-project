
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import SeattleBlog from './components/blogs/seattle-blog'; 
import PortlandBlog from './components/blogs/portland-blog.js';
import Blogs from './components/blogs/blogs-home.js';
import Footer from './components/footer/footer.js';
import OaklandSFBlog from './components/blogs/oakland-sf-blog.js';



function App() {
  
  return (
    <Router>
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/seattle-blog" element={<SeattleBlog />} />
          <Route path ="/blogs/portland-blog" element={<PortlandBlog/>}/>
          <Route path ="/blogs/oakland-sf-blog" element={<OaklandSFBlog/>}/>
          <Route path = "/blogs" element={<Blogs/>}/>

        </Routes>

      <Footer />
      </Router>
  );
}

export default App;
