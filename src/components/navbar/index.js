import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink exact className="navbar-brand home" activeClassName="active" to="/">home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-list">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/blogs">blogs</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/map">map</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/about">about</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
