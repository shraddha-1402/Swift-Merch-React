import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaTag } from "react-icons/fa";
import { useAddress } from "../../context";
import { CouponModal } from "../CouponModal";
import { usePaymentIntegration } from "../../hooks";

const CartPriceDetailCard = ({ cart }) => {
  const { deliveryAddress } = useAddress();

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState({
    couponCode: "",
    discount: 0,
  });

  const priceDetail = cart.reduce(
    (acc, curr) => ({
      totalPrice: acc.totalPrice + curr.price * curr.qty,
      totalMRP: acc.totalMRP + curr.mrp * curr.qty,
    }),
    {
      totalPrice: 0,
      totalMRP: 0,
    }
  );

  const discountAmount = priceDetail.totalMRP - priceDetail.totalPrice;
  const totalAmount = priceDetail.totalPrice - appliedCoupon.discount;

  const { displayRazorpay } = usePaymentIntegration();

  return (
    <>
      {!!showCouponModal && (
        <CouponModal
          setShowCouponModal={setShowCouponModal}
          totalPrice={priceDetail.totalPrice}
          appliedCoupon={appliedCoupon}
          setAppliedCoupon={setAppliedCoupon}
        />
      )}
      <div className="m-1 cart-price-details">
        <p className="mb-0-5">COUPON : </p>
        <button
          className="btn btn-outline-secondary w-100p my-0-5"
          onClick={() => setShowCouponModal((prev) => !prev)}
        >
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
            <p className="green-text">- &#8377; {appliedCoupon.discount} </p>
          </div>
          <div className="flex-row justify-spc-bet my-1-5 cart-total-amt">
            <p className="text-bold-weight">Total Amount </p>
            <p className="text-bold-weight">&#8377;{totalAmount}</p>
          </div>
        </div>

        <button
          className={`btn btn-solid-primary w-100p my-0-5 ${
            deliveryAddress === null ? "disabled-btn" : ""
          } `}
          disabled={deliveryAddress === null}
          onClick={() => displayRazorpay({ totalAmount })}
        >
          Proceed To Checkout
        </button>
        {!!(deliveryAddress === null) && (
          <p className="sm-text red-text mb-0-5">
            ! Select Address To Checkout
          </p>
        )}
      </div>
    </>
  );
};

CartPriceDetailCard.propTypes = {
  cart: PropTypes.array,
};

export { CartPriceDetailCard };
