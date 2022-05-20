import axios from "axios";
import { toast } from "react-toastify";
import { actionType } from "../../constants";

const getAllWishlistProducts = async ({ token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_WISHLIST,
        payload: {
          wishlist: data.wishlist,
        },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

const addToWishlist = async ({ token, product, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    if (status === 201) {
      dataDispatch({
        type: actionType.DATA.SET_WISHLIST,
        payload: { wishlist: data.wishlist },
      });
      toast.success("Added to wishlist");
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't add to wishlist");
    console.log(error);
  }
};

const deleteFromWishlist = async ({ token, product, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.delete(
      `/api/user/wishlist/${product._id}`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dataDispatch({
        type: actionType.DATA.SET_WISHLIST,
        payload: { wishlist: data.wishlist },
      });
      toast.success("Removed from wishlist");
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't remove from wishlist");
    console.log(error);
  }
};

export { getAllWishlistProducts, addToWishlist, deleteFromWishlist };
