
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import Blogs from './components/blogs/blogs-home.js';
import MainMap from './components/maps/main-map.js';
import About from './components/about/index.js';
import Footer from './components/footer/footer.js';
import BlogPost from './components/blogs/blog-post.js'



function App() {
  
  return (
    <Router>
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
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
