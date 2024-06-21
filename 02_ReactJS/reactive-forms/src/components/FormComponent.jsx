import React, { useState } from "react";

const FormComponent = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [header, setHeader] = useState("Welcome. Please submit the form.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length < 2) {
          fieldErrors[name] = `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } needs to be more than 2 characters`;
        } else {
          delete fieldErrors[name];
        }
        break;
      case "email":
        if (value.length < 8) {
          fieldErrors[name] = "Email needs to be more than 8 characters";
        } else {
          delete fieldErrors[name];
        }
        break;
      case "password":
        if (value.length < 8) {
          fieldErrors[name] = "Password needs to be more than 8 characters";
        } else {
          delete fieldErrors[name];
        }
        break;
      case "confirmPassword":
        if (value !== form.password) {
          fieldErrors[name] = "Confirm password does not match";
        } else {
          delete fieldErrors[name];
        }
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      const newUser = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      };

      setUsers([...users, newUser]);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setHeader("Thank you for submitting the form!");
    }
  };

  return (
    <div>
      <h2>{header}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Please enter first name."
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Please enter last name."
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Please enter email address."
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Please enter password."
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Please confirm password."
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Create User</button>
      </form>
      <h3>Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
