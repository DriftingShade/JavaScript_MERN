import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Add Company</button>
      </Link>
    </header>
  );
};

export default Header;
