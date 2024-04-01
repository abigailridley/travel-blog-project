import './style.css'; 
import LatestBlog from './latest-blog';
// import WarningMsg from "./warning";
import CurrentLocationMap from '../maps/current-location';


const Homepage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-hero'>
        <h2>Abigail's</h2>
        <h1>Travel Blog</h1>
      </div>
      <div className="container">
        <LatestBlog />
        <CurrentLocationMap />
       
      </div>
    </div>
  );
};

export default Homepage;