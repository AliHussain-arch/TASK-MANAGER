import { useState } from "react";
import "../signUp/signUp.css";
import { Link, Navigate } from "react-router-dom";

export default function SignUp({ signUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await signUp({
      username: formData.username,
      password: formData.password,
    });
    setRedirectToSignIn(true);
  }

  if (redirectToSignIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="inner-body">
      <div className="container-SignUp">
        <h1>SignUp</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={handleFormData}
              value={formData.username}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={handleFormData}
              value={formData.password}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleFormData}
              value={formData.confirmPassword}
            />
          </div>

          <button className="button-Sign-Up" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
