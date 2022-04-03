import { defaultUserDataState, actionType } from "../constants";

const userDataReducer = (state, action) => {
  const { USER_ACTION } = actionType;
  const {
    SAVE_USER_DATA,
    USER_LOGOUT,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } = USER_ACTION;

  switch (action.type) {
    case SAVE_USER_DATA: {
      return { ...action.payload };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...action.payload],
      };
    }

    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload
        ),
      };
    }

    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    }

    case USER_LOGOUT:
      localStorage.clear();
      return {
        ...defaultUserDataState,
      };

    default:
      return state;
  }
};

export { userDataReducer };
