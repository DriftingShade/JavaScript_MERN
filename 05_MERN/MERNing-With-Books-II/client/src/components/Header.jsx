import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/catalog">
        <button>Catalog</button>
      </Link>
      <Link to="/create">
        <button>Add Book</button>
      </Link>
    </header>
  );
};

export default Header;
