import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand home" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-list">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Map</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
