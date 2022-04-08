import { useEffect, useState } from "react";
import { useData } from "../context";

const useCart = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  const {
    dataState: { cart },
  } = useData();

  useEffect(() => {
    () => {
      setInCart(cart?.find((curr) => curr._id === product._id));
    };
  }, [product, cart]);

  return { inCart };
};

export { useCart };
