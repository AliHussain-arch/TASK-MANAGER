import { useState } from "react";
import '../signUp/signUp.css';
export default function SignUp({signUp}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    signUp({
      username: formData.username,
      password: formData.password
    });}
  return (
    <div className="container">

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
          <label htmlFor="email">Password</label>
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
        <button className="button-Sign-Up" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
