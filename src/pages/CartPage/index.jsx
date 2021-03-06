import "./style.css";
import React, { useEffect, useState } from "react";
import { useProduct, useUserData } from "../../context";
import { Link } from "react-router-dom";
import { CartCard, CartPriceDetailCard } from "../../components";
import { routes } from "../../constants";

const CartPage = () => {
  const { userDataState } = useUserData();
  const { productsState } = useProduct();
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    setCart(productsState.products.filter((product) => product.inCart));
  }, [productsState]);

  return (
    <main className="my-3-5 w-100p">
      <h1 className="center-text">My Cart</h1>
      {userDataState.cart.length === 0 ? (
        <p className="my-2 center-text">
          Your Cart is Empty!
          <Link to={routes.PRODUCTS_PAGE} className="link primary-text">
            <span className="ml-0-25">Continue Shopping</span>
          </Link>
        </p>
      ) : (
        <div className="grid-2-col m-1 pos-rel">
          <div className="cart-items">
            <div className="card m-1 mw-28r p-0-5">
              <h3 className="m-0-5">
                Deliver To: {userDataState.firstName} {userDataState.lastName}
              </h3>
              <p className="mx-0-5">
                509 Baldeo Apartment, Queta Colony, New Ring Road, Nagpur -
                440030
              </p>
              <button className="btn btn-solid-secondary m-0-5">Change</button>
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
