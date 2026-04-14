import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-content">
            <h1 className='lg-heading text-light main-heading'>travel the world</h1>
            <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <Link to="/about" className='btn btn-primary text-red md-heading'>Explore Places</Link>
        </div>
    );
};

export default Header;
