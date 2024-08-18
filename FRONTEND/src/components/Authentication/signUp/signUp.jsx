export default function signUp() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="username" />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input type="password" id="password" name="password" placeholder="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="confirm password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }