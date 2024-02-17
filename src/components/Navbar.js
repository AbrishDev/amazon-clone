import React from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';
import Usa from '../assets/usa.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo"><a href='#'><img src={Logo} alt='logo'/></a></div>
      <div className='navbar_location'>
        <i className='material-icons'>location_on</i>
        <p className='nav_text'>Deliver to</p>
        <p className='nav_loc'></p>
      </div>
      <div className="navbar_search">
        <div className='navbar_dropdown'>
          <p>All</p>
          <i className='material-icons'>
          arrow_drop_down</i>
          </div>
        <input type="text" placeholder="Search" />
        <button>
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="navbar_language">
        <img src={Usa} alt='usa'/>
        <p className='nav_name'></p>
        <i className='material-icons'></i>
      </div>
      <div className="navbar_Account">
        <button className='nav_signin'>
            Hello, sign in
            Account & Lists
        </button>
        <i className='material-icons'></i>
      </div>

      <button className='nav_return'>
        Returns
        & Orders
      </button>
      <div className="navbar_cart">
        <i className='material-icons'>shopping_cart</i>
        <p className='nav_cart'></p>
      </div>
    </nav>
  );
}

export default Navbar;
