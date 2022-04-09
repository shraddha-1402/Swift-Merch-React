import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { FaTag } from "react-icons/fa";

const CartPriceDetailCard = ({ cart }) => {
  const priceDetail = cart.reduce(
    (acc, curr) => ({
      totalAmount: acc.totalAmount + curr.price * curr.qty,
      totalMRP: acc.totalMRP + curr.mrp * curr.qty,
    }),
    {
      totalAmount: 0,
      totalMRP: 0,
    }
  );

  const discountAmount = priceDetail.totalMRP - priceDetail.totalAmount;

  return (
    <div className="m-1 cart-price-details">
      <p className="mb-0-5">COUPON : </p>
      <button className="btn btn-outline-secondary w-100p my-0-5">
        Apply Coupon
        <FaTag className="ml-0-25" />
      </button>
      <p className="my-1">PRICE DETAILS : </p>
      <div className="my-0-5">
        <div className="flex-row justify-spc-bet my-1">
          <p>Total MRP ({cart.length} items) </p>
          <p>&#8377;{priceDetail.totalMRP}</p>
        </div>
        <div className="flex-row justify-spc-bet my-1">
          <p>Discount on MRP </p>
          <p className="green-text">- &#8377;{discountAmount}</p>
        </div>
        <div className="flex-row justify-spc-bet my-1">
          <p>Coupon Discount </p>
          <p className="green-text">- &#8377;0</p>
        </div>
        <div className="flex-row justify-spc-bet my-1-5 cart-total-amt">
          <p className="text-bold-weight">Total Amount </p>
          <p className="text-bold-weight">&#8377;{priceDetail.totalAmount}</p>
        </div>
      </div>
      <a href="#" className="link">
        <button className="btn btn-solid-primary w-100p my-0-5">
          Proceed To Checkout
        </button>
      </a>
      <button className="btn btn-outline-primary w-100p my-0-5">
        Share My Cart
      </button>
      <button className="btn btn-outline-primary w-100p my-0-5">
        Clear My Cart
      </button>
    </div>
  );
};

CartPriceDetailCard.propTypes = {
  cart: PropTypes.array,
};

export { CartPriceDetailCard };
