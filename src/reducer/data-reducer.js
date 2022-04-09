import { actionType } from "../constants";

const dataReducer = (state, action) => {
  const { type, payload } = action;
  const {
    DATA: { UPDATE_PRODUCTS, SET_WISHLIST, SET_CART },
  } = actionType;

  switch (type) {
    case UPDATE_PRODUCTS: {
      return {
        ...state,
        products: payload.products,
      };
    }

    case SET_WISHLIST:
      return {
        ...state,
        wishlist: payload.wishlist,
      };

    case SET_CART:
      return {
        ...state,
        cart: payload.cart,
      };

    default:
      return state;
  }
};

export { dataReducer };
