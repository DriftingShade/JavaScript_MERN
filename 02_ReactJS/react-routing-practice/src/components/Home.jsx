import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div>
        <h1>Home Component</h1>
        <Link to="/about">Go To About</Link>
        <br />
        <Link to="/submitter">Go To Submit</Link>
      </div>
    </>
  );
};

export default Home;
