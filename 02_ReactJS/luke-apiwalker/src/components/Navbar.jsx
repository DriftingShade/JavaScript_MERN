import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/people/1">People</Link>
      <Link to="/planets/1">Planets</Link>
    </nav>
  );
};

export default Navbar;
