import axios from "axios";
import { toast } from "react-toastify";
import { actionType } from "../../constants";

const getAllCartProducts = async ({ token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_CART,
        payload: { cart: data.cart },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async ({ product, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    if (status === 201) {
      dataDispatch({
        type: actionType.DATA.SET_CART,
        payload: { cart: data.cart },
      });
      toast.success("Added to cart");
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't add to cart.");
    console.log(error);
  }
};

const changeCartQuantity = async ({ product, type, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      `/api/user/cart/${product._id}`,
      { action: { type } },
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dataDispatch({
        type: actionType.DATA.SET_CART,
        payload: { cart: data.cart },
      });
      toast.success("Product quantity updated");
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't update quantity.");
    console.log(error);
  }
};

const deleteFromCart = async ({ product, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.delete(
      `/api/user/cart/${product._id}`,
      { headers: { authorization: token } }
    );
    if (status === 200) {
      dataDispatch({
        type: actionType.DATA.SET_CART,
        payload: { cart: data.cart },
      });
      toast.success("Removed from cart");
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't remove from cart.");
    console.log(error);
  }
};

const clearCart = async ({ token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.delete(
      "/api/user/cart/all",
      {
        headers: { authorization: token },
      }
    );
    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_CART,
        payload: { cart: data.cart },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

export {
  changeCartQuantity,
  getAllCartProducts,
  addToCart,
  deleteFromCart,
  clearCart,
};
