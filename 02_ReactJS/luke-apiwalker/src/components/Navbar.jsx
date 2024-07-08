import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar mb-5 w-50 mx-auto">
      <div className="container-fluid">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/people/1" className="nav-link">People</Link>
        <Link to="/planets/1" className="nav-link">Planets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
