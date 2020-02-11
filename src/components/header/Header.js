import React from "react";
import logo from "./download.png";
import dot from "./dot-square.svg";
import newssearch from "./newsearch.png";
import shoppingcart from "./shopping-cart.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="nav">
      <img src={logo} height="55px" width="100px" alt="/" />
      <img className="dot" src={dot} height="20px" width="12px" alt="/" />
      <div className="dropdown">
        <p className="cat">categories</p>
        <div className="dropdownContent">
          <ul className="dropdownUl">
            <li>
              <a href="/">Business</a>
            </li>
            <li>
              <a href="/">Development</a>
            </li>
            <li>
              <a href="/">Finance and Accounting</a>
            </li>
            <li>
              <a href="/">IT & software</a>
            </li>
            <li>
              <a href="/">Office Productivity</a>
            </li>
            <li>
              <a href="/">personnal Development</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Marketting </a>
            </li>
            <li>
              <a href="/">Lifestyle</a>
            </li>
            <li>
              <a href="/">photography</a>
            </li>
            <li>
              <a href="/">Health & Fitness</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Teaching and Academics</a>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="search1"
        src={newssearch}
        height="20px"
        width="20px"
        alt="/"
      />
      <input className="navInp" type="text" placeholder="search for anything" />
      <div className="ud">
        <a href="/" className="pee">
          Udemy for business
          <div className="hide1">
            <p>
              Get your team access to 3,500+ <br />
              top Udemy courses anytime, anywhere
              <a href="/" className="tag1">
                Try Udemy for Business
              </a>
            </p>
          </div>
        </a>
      </div>
      <div className="te">
        <a href="/" className="pee">
          teach on Udemy
          <div className="hide2">
            <p>
              Turn what you know into an opportunity
              <br />
              and reach millions around the world.
              <a href="/" className="tag2">
                Learn more
              </a>
            </p>
          </div>
        </a>
      </div>
      <div className="car">
        <a href="/" className="shop">
          <img
            src={shoppingcart}
            height="35px"
            width="28px"
            id="shop-cart"
            alt="/"
          />

          <div className="hide3">
            <p>Your cart is empty.</p>
            <a href="/" className="tag3">
              keep shopping
            </a>
          </div>
        </a>
      </div>
      <a href="/" className="but1">
        Log In
      </a>
      <a href="/" className="but2">
        Sign Up
      </a>
    </header>
  );
};
export default Header;
