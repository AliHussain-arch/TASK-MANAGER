import { useState } from "react";
import '../signIn/signIn.css'
export default function SignIn({signIn, getUser, setUser}) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    signIn(formData);
    setUser(await getUser)
  }
  return (
    <div className="inner-body">
    <div className="container">
      <h1>SignIn</h1>
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
        <button className="button-sign-in" type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
}
