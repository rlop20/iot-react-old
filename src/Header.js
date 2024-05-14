import React from 'react';
import './App.css'; // CSS file for styling
import photo2 from './photos/Pima-Community-College.png'


const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={photo2} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="Home.js">Home</a></li>
          <li><a href="Activities.js">Activities</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
