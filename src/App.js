
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import SeattleBlog from './components/blogs/seattle-blog'; 
import PortlandBlog from './components/blogs/portland-blog.js';
import Blogs from './components/blogs/blogs-home.js';
import Footer from './components/footer/footer.js';



function App() {
  
  return (
    <Router>
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/seattle-blog" element={<SeattleBlog />} />
          <Route path ="/portland-blog" element={<PortlandBlog/>}/>
          <Route path = "/blogs" element={<Blogs/>}/>

        </Routes>

      <Footer />
      </Router>
  );
}

export default App;
