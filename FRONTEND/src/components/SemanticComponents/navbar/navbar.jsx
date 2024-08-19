import React from 'react';
import '../navbar/navbar.css';

export default function Navbar({ user }) {
  return (
    <nav >
      <div className="nav-left">
        <img className='nav-logo' src='https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png' alt="Logo" />
        <a href="#">Home</a>
      </div>
      <div className="nav-right">
        {user ? (
          <>
           {/* add if the user login show this  */}
            <a href="#">Sign Out</a>
          </>
        ) : (
          <>
            <a href="#">Sign In</a>
            <a href="#">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
}