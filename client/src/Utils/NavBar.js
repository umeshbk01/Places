import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const Navbar = () => {
 
  const Links = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/newPlace">Add Place</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark1">
      <div className='logo'>
      <h2> 
     Places
      </h2>
      </div>
      <Fragment>{Links}</Fragment>
    </nav>
  );
};


export default Navbar;