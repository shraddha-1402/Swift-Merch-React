import "./style.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import { useAuth, useData } from "../../context";
import { routes } from "../../constants";

const Navbar = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    dataState: { cart, wishlist },
  } = useData();
  const navigate = useNavigate();

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
          <li className="icon" onClick={() => navigate(routes.PROFILE_PAGE)}>
            {token ? (
              <FaUserCheck className="sm-icon" />
            ) : (
              <FaUser className="xs-icon" />
            )}
          </li>
          <li className="xs-icon pos-rel">
            <FaHeart
              className="curr-pointer"
              onClick={() => navigate(routes.WISHLIST_PAGE)}
            />
            {!!token && (
              <span className="pos-abs badge icon-badge sm-badge">
                {wishlist?.length}
              </span>
            )}
          </li>
          <li className="xs-icon pos-rel">
            <FaShoppingCart
              className="curr-pointer"
              onClick={() => navigate(routes.CART_PAGE)}
            />
            {!!token && (
              <span className="pos-abs badge icon-badge sm-badge">
                {cart?.length}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
