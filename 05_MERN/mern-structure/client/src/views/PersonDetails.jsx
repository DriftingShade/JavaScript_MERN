import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PersonDetails = () => {
  const [person, setPerson] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deletePerson = () => {
    axios.delete(`http://localhost:8000/api/people/${id}`).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  };

  return (
    <div>
      <h1>
        {person.lastName}, {person.firstName}
      </h1>

      <h3>Age</h3>
      <h4>{person.age}</h4>

      <h3>Famous</h3>

      <h4>
        {person.celebrityStatus
          ? `${person.firstName} ${person.lastName} is famous!`
          : `${person.firstName} ${person.lastName} is not famous`}
      </h4>
      <button className="btn btn-danger" onClick={deletePerson}>
        Delete {person.firstName} {person.lastName}
      </button>
    </div>
  );
};

export default PersonDetails;
