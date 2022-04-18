import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData, useAuth, useAddress } from "../../context";
import {
  CartCard,
  CartPriceDetailCard,
  ChangeAddressModal,
} from "../../components";
import { routes } from "../../constants";
import { getAllCartProducts } from "../../utils/services";
import { useDynamicTitle } from "../../hooks";

const CartPage = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    dataState: { cart },
    dataDispatch,
  } = useData();
  useDynamicTitle();
  const { setShowAddressForm, deliveryAddress } = useAddress();
  useEffect(() => {
    getAllCartProducts({ token, dataDispatch });
  }, []);

  const [showChangeAddressModal, setShowChangeAddressModal] = useState(false);

  return (
    <main className="my-3-5 w-100p">
      {!!showChangeAddressModal && (
        <ChangeAddressModal
          setShowChangeAddressModal={setShowChangeAddressModal}
        />
      )}
      <h1 className="center-text">My Cart</h1>
      {cart?.length === 0 ? (
        <p className="my-2 center-text">
          Your Cart is Empty!
          <Link to={routes.PRODUCTS_PAGE} className="link primary-text">
            <span className="ml-0-25">Continue Shopping</span>
          </Link>
        </p>
      ) : (
        <div className="grid-2-col m-1">
          <div className="cart-items">
            <div className="card address-card">
              {deliveryAddress ? (
                <>
                  <h3>Deliver To: {deliveryAddress.name}</h3>
                  <p>
                    {deliveryAddress.street}, {deliveryAddress.city},
                    {deliveryAddress.zipCode}
                  </p>
                  <button
                    className="sm-btn mt-0-5"
                    onClick={() => setShowChangeAddressModal(true)}
                  >
                    Change
                  </button>
                </>
              ) : (
                <>
                  <h3>No Address Added</h3>
                  <button
                    className="sm-btn mt-0-5 curr-pointer"
                    onClick={() => setShowAddressForm(true)}
                  >
                    Add Address
                  </button>
                </>
              )}
            </div>
            {cart.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <CartPriceDetailCard cart={cart} />
        </div>
      )}
    </main>
  );
};

export { CartPage };
