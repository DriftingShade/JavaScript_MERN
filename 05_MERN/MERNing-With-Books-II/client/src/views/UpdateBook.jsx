import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pageCount: "",
    isAvailable: false,
    errors: {},
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        setFormData({
          title: res.data.title,
          author: res.data.author,
          pageCount: res.data.pages,
          isAvailable: res.data.isAvailable,
          errors: {},
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title: formData.title,
      author: formData.author,
      pages: formData.pageCount,
      isAvailable: formData.isAvailable,
    };
    axios
      .put(`http://localhost:8000/api/books/${id}`, updatedBook)
      .then(() => navigate("/catalog"))
      .catch((err) =>
        setFormData((prevData) => ({
          ...prevData,
          errors: err.response.data.errors,
        }))
      );
  };

  return (
    <div>
      <h1>Update {formData.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {formData.errors.title && (
          <p style={{ color: "red" }}>{formData.errors.title.message}</p>
        )}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>Author Name</label>
        {formData.errors.author && (
          <p style={{ color: "red" }}>{formData.errors.author.message}</p>
        )}
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <label>Page Count</label>
        {formData.errors.pages && (
          <p style={{ color: "red" }}>{formData.errors.pages.message}</p>
        )}
        <input
          type="number"
          name="pageCount"
          value={formData.pageCount}
          onChange={handleChange}
          required
        />
        <label>Is it Available?</label>
        {formData.errors.isAvailable && (
          <p style={{ color: "red" }}>{formData.errors.isAvailable.message}</p>
        )}
        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
