import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/people/create">Create New Person</Link>

      <table className="table w-50 mx-auto my-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Celebrity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>
                <Link to={`/people/${person._id}/details`}>
                  {person.firstName} {person.lastName}
                </Link>
              </td>
              <td>{person.age}</td>
              <td>{person.celebrityStatus ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
