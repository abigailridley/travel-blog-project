
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import Homepage from './components/homepage/index.js';
import Navbar from './components/navbar/index.js';
import SeattleBlog from './components/blogs/seattle-blog'; 

function App() {
  
  return (
    <Router>
      
        <Navbar />
       
        
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/seattle-blog" element={<SeattleBlog />} />
        </Routes>

      
      </Router>
  );
}

export default App;
