import "./style.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";
import { routes } from "../../constants";
import { useData, useAuth } from "../../context";
import { useCart, useWishlist } from "../../hooks";
import {
  addToWishlist,
  deleteFromWishlist,
  addToCart,
} from "../../utils/services";

const ProductCard = ({ product }) => {
  const { img, name, price, mrp, album, rating } = product;
  const { inWishlist } = useWishlist({ product });
  const { inCart } = useCart({ product });
  const {
    authState: { token },
  } = useAuth();
  const { dataDispatch } = useData();
  const navigate = useNavigate();
  const [disableWishlist, setDisableWishlist] = useState(false);
  const [disableCartAdd, setDisableCartAdd] = useState(false);

  useEffect(() => {
    return () => {
      setDisableWishlist(false);
      setDisableCartAdd(false);
    };
  }, []);

  const handleWishlistClick = async () => {
    setDisableWishlist(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else if (inWishlist)
      await deleteFromWishlist({ token, product, dataDispatch });
    else await addToWishlist({ token, product, dataDispatch });
    setDisableWishlist(false);
  };

  const handleCartClick = async () => {
    setDisableCartAdd(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else await addToCart({ token, product, dataDispatch });
    setDisableCartAdd(false);
  };

  return (
    <div className="card m-1 mw-16r">
      <div className="pos-rel img-container-sekeleton">
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
