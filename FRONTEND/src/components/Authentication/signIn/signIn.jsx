import { useState } from "react";
<<<<<<< HEAD

export default function SignIn({signIn}) {
=======
import '../signIn/signIn.css'
export default function SignIn() {
>>>>>>> 1526b35a9ba53217ea178cacf7adf080233c6fc3
  const [formData, setFormData] = useState({ username: "", password: "" });
  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    signIn(formData);
  }
  return (
    
    <div className="container">
      <h1>SignIn</h1>
<<<<<<< HEAD
      <form onSubmit={handleFormSubmit}>
        <div>
=======
      <form onSubmit={()=>handleFormSubmit}>
        <div >
>>>>>>> 1526b35a9ba53217ea178cacf7adf080233c6fc3
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
