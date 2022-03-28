import axios from "axios";
import { actionType } from "../../constants";

const wishlistHandler = async (
  _id,
  requestType,
  token,
  productsDispatch,
  userDispatch
) => {
  switch (requestType) {
    case "POST": {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product: {
              _id,
            },
          },
          {
            headers: { authorization: token },
          }
        );
        if (response.status === 201) {
          productsDispatch({ type: "TOGGLE_WISHLIST_PROPERTY", payload: _id });
          userDispatch({
            type: actionType.USER_ACTION.ADD_TO_WISHLIST,
            payload: response.data.wishlist,
          });
        } else console.log("cannot add to wishlist");
      } catch (error) {
        console.log(error);
      }
      break;
    }

    case "DELETE": {
      try {
        const response = await axios.delete(`/api/user/wishlist/${_id}`, {
          headers: { authorization: token },
        });
        if (response.status === 200) {
          productsDispatch({ type: "TOGGLE_WISHLIST_PROPERTY", payload: _id });
          userDispatch({
            type: actionType.USER_ACTION.REMOVE_FROM_WISHLIST,
            payload: _id,
          });
        }
      } catch (error) {
        console.log(error);
      }
      break;
    }

    default:
      break;
  }
};

export { wishlistHandler };
