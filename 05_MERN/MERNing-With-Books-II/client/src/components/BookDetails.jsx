import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleBorrow = () => {
    axios
      .delete(`http://localhost:8000/api/books/${id}`)
      .then(() => navigate("/catalog"))
      .catch((error) => console.log(error));
  };

  return book ? (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>By {book.author}</p>
      <p>Page count: {book.pages}</p>
      <p>{book.isAvailable ? "Available for borrowing" : "Not available"}</p>
      {book.isAvailable && (
        <button onClick={handleBorrow} className="borrow-button">
          Borrow
        </button>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BookDetails;
