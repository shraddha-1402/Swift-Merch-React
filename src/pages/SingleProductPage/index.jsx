import "./style.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaCartPlus,
  FaStar,
  FaTag,
  FaHeart,
} from "react-icons/fa";
import { useCart, useWishlist } from "../../hooks";
import { routes } from "../../constants";
import { useAuth, useData } from "../../context";
import {
  addToCart,
  addToWishlist,
  deleteFromWishlist,
} from "../../utils/services";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [currProduct, setCurrProduct] = useState({});
  const [disableWishlist, setDisableWishlist] = useState(false);
  const [disableCartAdd, setDisableCartAdd] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data, status, statusText } = await axios.get(
          `/api/products/${productId}`
        );
        if (status === 200) setCurrProduct(data.product);
        else throw new Error(`${statusText} ${status}`);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      setDisableWishlist(false);
      setDisableCartAdd(false);
    };
  }, []);

  const {
    authState: { token },
  } = useAuth();
  const { dataDispatch } = useData();
  const { inWishlist } = useWishlist({ product: currProduct });
  const { inCart } = useCart({ product: currProduct });

  const handleWishlistClick = async () => {
    setDisableWishlist(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else if (inWishlist)
      await deleteFromWishlist({ token, product: currProduct, dataDispatch });
    else await addToWishlist({ token, product: currProduct, dataDispatch });
    setDisableWishlist(false);
  };

  const handleCartClick = async () => {
    setDisableCartAdd(true);
    if (token === null || token === "") navigate(routes.LOGIN_PAGE);
    else await addToCart({ token, product: currProduct, dataDispatch });
    setDisableCartAdd(false);
  };

  return (
    <div className="single-product-container">
      <div className="card single-product-card pos-rel">
        <button
          className="pos-abs card-badge-left xs-icon-bg icon icon-btn"
          onClick={handleWishlistClick}
          disabled={disableWishlist}
        >
          <FaHeart
            className={`wishlist-btn ${inWishlist ? "filled-heart" : ""} `}
          />
        </button>
        <div className="single-product-img">
          <img src={currProduct.img} alt="product" className="responsive-img" />
        </div>
        <div className="single-product-info">
          <div className="flex-col gap-0-5">
            <h2 className="lg-text">{currProduct.name}</h2>
            <span className="flex-row align-center gap-0-25 gray-text">
              <span>{currProduct.rating}</span>
              <FaStar className="rating-checked" /> | 25 reviews
            </span>
            <p className="text-bold-weight">
              <span className="lg-text">Rs. {currProduct.price}</span>
              <span className="text-line-through text-light-weight mx-0-5">
                Rs. {currProduct.mrp}
              </span>
              <span className="primary-text">66% Off </span>
            </p>
            <div className="product-perks">
              <span className="disp-block">
                <FaTag className="sm-text" /> Best Quality Product
              </span>
              <span className="disp-block">
                <FaTag className="sm-text" /> Free and Fast Delivery
              </span>
              <span className="disp-block">
                <FaTag className="sm-text" /> Easy Return Policy
              </span>
            </div>

            <p className="text-bold-weight">
              {currProduct.material ? `Material : ${currProduct.material}` : ""}
            </p>
            <p> {currProduct.description} </p>
          </div>
          <div className="flex-row">
            {inCart ? (
              <div className="mt-1 w-100p">
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
                className="btn btn-solid-primary mt-1 w-100p"
                disabled={disableCartAdd}
                onClick={handleCartClick}
              >
                <FaCartPlus className="mr-0-25" />
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleProduct };
