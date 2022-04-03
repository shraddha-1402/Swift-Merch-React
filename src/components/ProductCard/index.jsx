import "./style.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct, useUserData } from "../../context";
import { routes } from "../../constants";
import { wishlistHandler, cartHandler } from "../../utils/services";
import { FaCartPlus, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, img, name, price, mrp, album, rating, inWishlist, inCart } =
    product;
  const {
    userDataState: { token },
    userDataDispatch,
  } = useUserData();
  const { productsDispatch } = useProduct();
  const navigate = useNavigate();
  const [disableWishlist, setDisableWishlist] = useState(false);
  const [disableCartAdd, setDisableCartAdd] = useState(false);

  useEffect(() => {
    return () => setDisableWishlist(false);
  }, []);

  const handleWishlistClick = async () => {
    setDisableWishlist(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else if (inWishlist) {
      await wishlistHandler(
        _id,
        "DELETE",
        token,
        productsDispatch,
        userDataDispatch
      );
    } else
      await wishlistHandler(
        _id,
        "POST",
        token,
        productsDispatch,
        userDataDispatch
      );
    setDisableWishlist(false);
  };

  const handleCartClick = async () => {
    setDisableCartAdd(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else
      await cartHandler(_id, "POST", token, productsDispatch, userDataDispatch);
    setDisableCartAdd(false);
  };

  return (
    <div className="card m-1 mw-16r">
      <div className="pos-rel">
        <button
          className="pos-abs card-badge-left xs-icon-bg icon icon-btn"
          onClick={handleWishlistClick}
          disabled={disableWishlist}
        >
          <FaHeart
            className={`wishlist-btn ${inWishlist ? "filled-heart" : ""} `}
          />
        </button>
        <span className="rating-badge flex-row align-center gap-0-25">
          <span>{rating}</span>
          <FaStar className="rating-checked" />
        </span>
        <img src={img} alt="cd-img" className="card-img responsive-img" />
      </div>
      <div className="flex-col gap-0-25 m-0-5">
        <h3>{name}</h3>
        <p className="sm-text">{album} Album</p>
        <h4>
          Rs. {price}
          <span className="text-line-through text-light-weight mx-0-5">
            Rs. {mrp}
          </span>
          <span className="primary-text">66% Off </span>
        </h4>
      </div>
      <div className="flex-row">
        {inCart ? (
          <div className="m-0-5 w-100p">
            <button
              className="btn btn-solid-primary w-100p"
              onClick={() => navigate(routes.CART_PAGE)}
            >
              Go To Cart
              <FaArrowRight className="ml-0-25" />
            </button>
          </div>
        ) : (
          <button
            className="btn btn-solid-primary m-0-5 w-100p"
            disabled={disableCartAdd}
            onClick={handleCartClick}
          >
            <FaCartPlus className="mr-0-25" />
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export { ProductCard };
