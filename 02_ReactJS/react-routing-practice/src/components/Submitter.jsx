import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Thank you for your submission ${firstName} ${lastName}`);
    alert("Returning to your details page!");
    navigate(`/details/${firstName}/${lastName}`);
  };

  return (
    <div>
      <div className="menu">
        <Link to="/">Go To Home</Link>
        <br />
        <Link to="/about">Go To About</Link>
      </div>

      <h1>Submitter Component</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default About;
