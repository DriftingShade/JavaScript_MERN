import { useParams } from "react-router-dom";

const Details = (props) => {
  const { paramOne, paramTwo } = useParams();

  return (
    <div>
      <h1>{paramOne}'s Details</h1>
      <p>First Name: {paramOne}</p>
      <p>Last Name: {paramTwo}</p>
    </div>
  );
};

export default Details;
