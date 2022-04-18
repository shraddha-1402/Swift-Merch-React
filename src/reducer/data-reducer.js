import { actionType } from "../constants";

const dataReducer = (state, action) => {
  const { type, payload } = action;
  const {
    DATA: {
      UPDATE_PRODUCTS,
      SET_WISHLIST,
      SET_CART,
      SET_ADDRESSES,
      SET_ORDERS,
    },
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

    case SET_ADDRESSES:
      return {
        ...state,
        addresses: payload.addresses,
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: payload.orders,
      };

    default:
      return state;
  }
};

export { dataReducer };
