import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { FaCartPlus, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { img, name, price, mrp, album, rating, inWishlist, inCart } = product;

  return (
    <div className="card m-1 mw-16r">
      <div className="pos-rel">
        <button className="pos-abs card-badge-left small-icon icon icon-btn">
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
            <button className="btn btn-solid-primary w-100p">
              Go To Cart
              <FaArrowRight className="ml-0-25" />
            </button>
          </div>
        ) : (
          <button className="btn btn-solid-primary m-0-5 w-100p">
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
