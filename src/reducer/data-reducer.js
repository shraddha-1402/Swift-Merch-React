import { actionType } from "../constants";

const dataReducer = (state, action) => {
  const { type, payload } = action;
  const {
    DATA: {
      UPDATE_PRODUCTS,
      TOGGLE_WISHLIST_PROPERTY,
      SET_WISHLIST,
      TOGGLE_CART_PROPERTY,
      SET_CART,
      INCREMENT_CART_QUANTITY,
      DECREMENT_CART_QUANTITY,
      RESET_PRODUCTS,
    },
  } = actionType;

  switch (type) {
    case UPDATE_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }

    case TOGGLE_WISHLIST_PROPERTY: {
      return {
        products: state.products.map((product) =>
          product._id === payload
            ? { ...product, inWishlist: !product.inWishlist }
            : product
        ),
      };
    }
    case SET_WISHLIST:
      return {
        ...state,
        wishlist: payload.wishlist,
      };

    case TOGGLE_CART_PROPERTY: {
      return {
        products: state.products.map((product) =>
          product._id === payload
            ? { ...product, inCart: !product.inCart, cartQuantity: 1 }
            : product
        ),
      };
    }

    case SET_CART:
      return {
        ...state,
        cart: payload.cart,
      };

    case INCREMENT_CART_QUANTITY: {
      return {
        products: state.products.map((product) =>
          product._id === payload
            ? { ...product, cartQuantity: product.cartQuantity + 1 }
            : product
        ),
      };
    }
    case DECREMENT_CART_QUANTITY: {
      return {
        products: state.products.map((product) =>
          product._id === payload
            ? { ...product, cartQuantity: product.cartQuantity - 1 }
            : product
        ),
      };
    }
    case RESET_PRODUCTS: {
      return {
        products: state.products.map((product) => ({
          ...product,
          inWishlist: false,
          inCart: false,
          cartQuantity: 1,
        })),
      };
    }

    default:
      return state;
  }
};

export { dataReducer };
