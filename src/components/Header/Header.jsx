import React from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <section>
      <div className={classes.header_container}>
        {/* logo */}
        <div className={classes.logo_container}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>
        {/* delivery */}
        <div className={classes.delivery}>
        <span>
          <SlLocationPin />
        </span>
        <div>
          <p>Deliverd to</p>
          <span>Ethiopia</span>
        </div>
      </div>
      </div>



      <div className={classes.search}>
        <select name="" id="">
          <option value="">all</option>
        </select>
        <input type="text" />
        <BsSearch size={25}/>
        {/* icon */}
      </div>


      <div className={classes.order_container}>
        <Link to="" className={classes.language}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
            alt=""
          />
          <select name="" id="">
            <option value="">EN</option>
          </select>
          </Link>

        <Link to="/">
            <p>Sign In</p>
            <span>account & Lists</span>
        </Link>
        <Link to="/orders">
          <p>Returns</p>
          <span>& Orders</span>
        </Link>
        <Link to="/cart" className={classes.cart}>
          <BiCart size={35}/>
          <span>0</span>
        </Link>
      </div>
      </div>
    </section>
   <LowerHeader/>
   </>
  );
}

export default Header;
