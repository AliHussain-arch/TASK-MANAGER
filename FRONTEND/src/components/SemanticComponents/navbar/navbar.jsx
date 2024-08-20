import '../navbar/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

export default function Navbar({ user, setUser}) {
  const navigate = useNavigate();
  async function signout(){
    try{
      console.log('signing out');
      await authService.signout();
      setUser('');
      navigate('/');
    }catch(error){
      console.log(error);
    }
  }
  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li>
              <Link to={`${user.id}/projects`}>Projects</Link>
            </li>
            <li>
              <button onClick={signout}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}