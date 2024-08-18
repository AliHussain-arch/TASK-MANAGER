export default function signIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}