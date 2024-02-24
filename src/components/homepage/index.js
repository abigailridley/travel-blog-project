import './style.css'; 
import LatestBlog from './latest-blog';
import WarningMsg from "./warning";


const Homepage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-hero'>
        <h2>Abigail's</h2>
        <h1>Travel Blog</h1>
      </div>
      <div className="container grid-container">
        <div className='row'>
          <div className='col-md-6'>
            <LatestBlog/>
          </div>
          <div className='col-md-6'>
            <WarningMsg/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;