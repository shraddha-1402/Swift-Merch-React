import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { GrClose } from "react-icons/gr";
import { coupons } from "../../constants";

const CouponModal = ({
  setShowCouponModal,
  totalPrice,
  appliedCoupon,
  setAppliedCoupon,
}) => {
  const checkIfCouponApplicable = (couponCode) => {
    switch (couponCode) {
      case "DIWALI_OFFER":
        return totalPrice >= 3000;
      case "MEGA_SAVING_OFFER":
        return totalPrice >= 6000;
      default:
        return true;
    }
  };

  const handleCouponChange = ({ couponCode, discount }) => {
    setAppliedCoupon({
      couponCode,
      discount,
    });
  };
  return (
    <div className="modal-overlay">
      <ul className="modal-box gap-1 coupon-modal">
        <GrClose
          className="pos-abs card-badge-left curr-pointer"
          onClick={() => setShowCouponModal(false)}
        />
        <p className="lg-text mx-auto primary-text mb-1"> Apply Coupon </p>

        {coupons.map(({ couponCode, discount, description }) => {
          return (
            <li
              key={couponCode}
              className={
                checkIfCouponApplicable(couponCode)
                  ? "coupon-card"
                  : "coupon-card disabled-coupon-card"
              }
            >
              <div>
                <input
                  type="checkbox"
                  id={couponCode}
                  name="coupon"
                  className="mr-0-25"
                  disabled={!checkIfCouponApplicable(couponCode)}
                  checked={appliedCoupon.couponCode === couponCode}
                  onChange={() => handleCouponChange({ couponCode, discount })}
                />
                <label htmlFor={couponCode}>
                  {couponCode.split("_").join(" ")}
                </label>
              </div>
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CouponModal.propTypes = {
  setShowCouponModal: PropTypes.func,
  totalPrice: PropTypes.number,
  appliedCoupon: PropTypes.object,
  setAppliedCoupon: PropTypes.func,
};

export { CouponModal };

export const data = [
  {
    id: 1,
    item: "shoes",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    item: "jacket",
    price: 400,
    quantity: 1,
  },
  {
    id: 3,
    item: "hat",
    price: 50,
    quantity: 1,
  },
  {
    id: 4,
    item: "sunglasses",
    price: 250,
    quantity: 1,
  },
  {
    id: 5,
    item: "gloves",
    price: 300,
    quantity: 1,
  },
];
