import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
             <h1 className='logo lg-heading text-light'>WT</h1>
             <ul className='nav-items'>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
             </ul>
        </div>
    );
};

export default Navbar;
