import { useEffect, useState } from "react";
import { useData } from "../context";

const useWishlist = ({ product }) => {
  const [inWishlist, setInWishlist] = useState(false);

  const {
    dataState: { wishlist },
  } = useData();

  useEffect(() => {
    () => {
      setInWishlist(wishlist?.find((curr) => curr._id === product._id));
    };
  }, [product, wishlist]);

  return { inWishlist };
};

export { useWishlist };
