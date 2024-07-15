import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPageCount(res.data.pages);
        setIsAvailable(res.data.isAvailable);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { title, author, pages: pageCount, isAvailable };
    axios
      .put(`http://localhost:8000/api/books/${id}`, updatedBook)
      .then(() => navigate("/catalog"))
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <div>
      <h1>Update {title}</h1>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
