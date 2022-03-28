import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../context/index";
import { ProductCard } from "../components";
import { routes } from "../constants";

const WishlistPage = () => {
  const { productsState } = useProduct();
  const [wishlist, setWishlist] = useState([]);

  useEffect(async () => {
    setWishlist(productsState.products.filter((product) => product.inWishlist));
  }, [productsState]);

  return (
    <main className="my-3-5 w-100p">
      <h1 className="center-text">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="my-2 center-text">
          Your Wishlist is Empty!
          <Link to={routes.PRODUCTS_PAGE} className="link primary-text">
            <span className="ml-0-25">Continue Shopping</span>
          </Link>
        </p>
      ) : (
        <div className="grid-3-col-layout gap-0-5">
          {wishlist.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      )}
    </main>
  );
};

export { WishlistPage };
