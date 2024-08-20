import React from 'react';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';
import authService from '../../../services/authService';

export default function Navbar({ user, setUser }) {
  return (
    <nav>
      <div className="nav-left">
        <img className='nav-logo' src='https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png' alt="Logo" />
        <a href="#" aria-label="Home">Home</a>
      </div>
      <div className="nav-right">
         
        {!user ? 
          <>
            <Link to="/signin" id="Sign In">Sign In</Link>
            <Link to="/signup" id="Sign Up">Sign Up</Link>
          </>
          :  <Link to="/signout" id="Sign Out"><button
          onClick={() => {
            authService.signout();
            setUser("");
          }}
        >
          SignOut
        </button></Link>}
      </div>
    </nav>
  );
}