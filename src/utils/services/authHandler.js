import axios from "axios";
import { actionType } from "../../constants";

const authHandler = async (
  credentials,
  authAction,
  userDispatch,
  productsDispatch
) => {
  try {
    const response = await axios.post(`/api/auth/${authAction}`, {
      ...credentials,
    });
    const userData =
      authAction === "login"
        ? { ...response.data.foundUser }
        : { ...response.data.createdUser };

    localStorage.setItem("token", response.data.encodedToken);
    localStorage.setItem("userData", JSON.stringify(userData));

    if (response.status === 201 || response.status === 200) {
      userDispatch({
        type: actionType.USER_ACTION.SAVE_USER_DATA,
        payload: { ...userData, token: response.data.encodedToken },
      });
      productsDispatch({
        type: actionType.PRODUCT_ACTIONS.SET_WISHLIST,
        payload: userData.wishlist,
      });
    }
    return {
      status: response.status,
    };
  } catch (error) {
    console.error(error);
    return {
      status: error.response.status,
    };
  }
};

export { authHandler };
