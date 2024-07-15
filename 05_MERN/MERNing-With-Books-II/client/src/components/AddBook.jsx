import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, pages: pageCount, isAvailable };
    axios
      .post("http://localhost:8000/api/books", newBook)
      .then(() => navigate("/catalog"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Author Name</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label>Page Count</label>
        <input
          type="number"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
          required
        />
        <label>Is it Available?</label>
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
