import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h2 className="primary-color">NoteSphere</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add" className="ml-3">New Note</Link>
                <Link to="/login" className="ml-3">login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;