import React from 'react';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
  return (
    <nav>
      <div className="nav-left">
        <img className='nav-logo' src='https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png' alt="Logo" />
        <a href="#" aria-label="Home">Home</a>
      </div>
      <div className="nav-right">
          <>
            <Link to="/signin" aria-label="Sign In">Sign In</Link>
            <Link to="/signup" aria-label="Sign Up">Sign Up</Link>
          </>
      </div>
    </nav>
  );
}