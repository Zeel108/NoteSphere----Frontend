import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h2 className="primary-color">NoteSphere</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/addnote" className="ml-3">New Sphere</Link>            {/*here when we click on New Sphere it call /addnote which goes to aap.js     */}
                <Link to="/login" className="ml-3">login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;