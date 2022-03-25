import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="pos-sticky-t0 z-1">
      <div className="nav pos-rel">
        <Link className="link flex-row align-center" to={routes.HOME_PAGE}>
          <h1 className="nav-heading primary-text">Swift Merch</h1>
        </Link>

        <ul className="ml-auto list-style-none nav-menu mt-0-5">
          <li className="nav-search-bar">
            <input
              type="search"
              name="search"
              id="search-products"
              className="nav-search-input"
              placeholder="search products"
            />
            <button className="nav-search-btn">
              <FaSearch />
            </button>
          </li>
          <li className="icon small-icon">
            <FaUser />
          </li>
          <li className="icon small-icon pos-rel">
            <FaHeart />
          </li>
          <li className="icon small-icon pos-rel">
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
