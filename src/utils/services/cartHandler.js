import axios from "axios";
import { actionType } from "../../constants";

const cartHandler = async (
  _id,
  requestType,
  token,
  productsDispatch,
  userDataDispatch
) => {
  const {
    PRODUCT_ACTIONS: { TOGGLE_CART_PROPERTY },
    USER_ACTION: { ADD_TO_CART, REMOVE_FROM_CART },
  } = actionType;

  switch (requestType) {
    case "POST": {
      try {
        const response = await axios.post(
          "/api/user/cart",
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
          productsDispatch({
            type: TOGGLE_CART_PROPERTY,
            payload: _id,
          });
          userDataDispatch({
            type: ADD_TO_CART,
            payload: response.data.cart,
          });
        } else console.log("cannot add to cart");
      } catch (error) {
        console.log(error);
      }
      break;
    }

    case "DELETE": {
      try {
        const response = await axios.delete(`/api/user/cart/${_id}`, {
          headers: { authorization: token },
        });
        if (response.status === 200) {
          productsDispatch({
            type: TOGGLE_CART_PROPERTY,
            payload: _id,
          });
          userDataDispatch({
            type: REMOVE_FROM_CART,
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

export { cartHandler };
