import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, pages: pageCount, isAvailable };
    axios
      .post("http://localhost:8000/api/books", newBook)
      .then(() => navigate("/catalog"))
      .catch((err) => setErrors(err.response.data.errors));
    console.log(errors);
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Author Name</label>
        {errors.author && (
          <p style={{ color: "red" }}>{errors.author.message}</p>
        )}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label>Page Count</label>
        {errors.pages && <p style={{ color: "red" }}>{errors.pages.message}</p>}
        <input
          type="number"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
          required
        />
        <label>Is it Available?</label>
        {errors.isAvailable && (
          <p style={{ color: "red" }}>{errors.isAvailable.message}</p>
        )}
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
