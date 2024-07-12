import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [celebrityStatus, setCelebrityStatus] = useState(false);

  const navigate = useNavigate();

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const celebrityStatusHandler = (e) => {
    setCelebrityStatus(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
        age,
        celebrityStatus,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center my-3">Create A Person</h1>
      <form onSubmit={submitHandler} className="form-control w-25 mx-auto">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          className="form-control"
          type="text"
          id="firstName"
          value={firstName}
          onChange={firstNameHandler}
        />

        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          className="form-control"
          type="text"
          id="lastName"
          value={lastName}
          onChange={lastNameHandler}
        />

        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          className="form-control"
          type="number"
          id="age"
          value={age}
          onChange={ageHandler}
        />

        <label htmlFor="celebrityStatus" className="form-check-label mt-3">
          Celebrity?
        </label>
        <input
          className="form-check-input mx-3 my-3"
          type="checkbox"
          id="celebrityStatus"
          value={celebrityStatus}
          onChange={celebrityStatusHandler}
        />

        <button className="btn btn-primary form-control my-2">Submit</button>
      </form>
    </div>
  );
};

export default PersonForm;
