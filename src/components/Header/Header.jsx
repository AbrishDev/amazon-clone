import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
   <section>
    <section>
      <div>
        {/* logo */}
        <a href="/">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </a>

        {/* delivery */}
        <span>
        <SlLocationPin />
        </span>
        <div>
          <p>Deliverd to</p>
          <span>Ethiopia</span>
        </div>
      </div>
      <div>
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" name='' id='' placeholder='search product'/>
        <FaSearch />
        {/* icon */}
      </div>
      <div>
        <div>
          <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />
          <select name="" id="">
            <option value="">EN</option>
          </select>
        </div>

        <a href="">
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
        </a>
        <a href="">
          <p>Returns</p>
          <span>& Orders</span>
        </a>
        <a href="">
        <BiCart />
          <span>0</span>
        </a>
      </div>
    </section>
   </section>
  );
}

export default Header;
