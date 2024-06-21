import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, initialAge, hairColor }) => {
  const [age, setAge] = useState(initialAge);

  const birthdayButton = () => {
    setAge(age + 1);
  };

  return (
    <>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={birthdayButton}>
        Birthday Button for {firstName} {lastName}
      </button>
    </>
  );
};

export default PersonCard;
