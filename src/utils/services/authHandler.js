import axios from "axios";
import { toast } from "react-toastify";
import { actionType, routes } from "../../constants";

const loginHandler = async ({
  credentials,
  authDispatch,
  dataDispatch,
  navigate,
}) => {
  const {
    DATA: { SET_CART, SET_WISHLIST },
    AUTH: { USER_LOGIN },
  } = actionType;

  try {
    const { data, status, statusText } = await axios.post("/api/auth/login", {
      ...credentials,
    });
    if (status === 200) {
      const userData = {
        token: data.encodedToken,
        userInfo: data.foundUser,
      };
      localStorage.setItem("ecommData", JSON.stringify(userData));
      authDispatch({
        type: USER_LOGIN,
        payload: { ...userData },
      });
      dataDispatch({
        type: SET_WISHLIST,
        payload: {
          wishlist: data.foundUser.wishlist,
        },
      });
      dataDispatch({
        type: SET_CART,
        payload: { cart: data.foundUser.cart },
      });
      toast.success("Logged in successfully");
      navigate(routes.PRODUCTS_PAGE);
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Invalid credentials");
    console.log(error);
  }
};

const signupHandler = async ({ credentials, navigate }) => {
  try {
    const { status, statusText } = await axios.post("/api/auth/signup", {
      ...credentials,
    });
    if (status === 201) {
      toast.success("SIgned up successfully");
      navigate(routes.LOGIN_PAGE);
    } else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    toast.error("Couldn't sign up");
    console.log(error);
  }
};

export { loginHandler, signupHandler };
