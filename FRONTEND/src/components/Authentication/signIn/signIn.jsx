export default function signIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}