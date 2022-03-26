import { actionType } from "../constants";

const productReducer = (state, action) => {
  const { PRODUCT_ACTIONS } = actionType;
  const {
    UPDATE_PRODUCTS,
    TOGGLE_WISHLIST_PROPERTY,
    TOGGLE_CART_PROPERTY,
    INCREMENT_CART_QUANTITY,
    DECREMENT_CART_QUANTITY,
    RESET_PRODUCTS,
  } = PRODUCT_ACTIONS;

  switch (action.type) {
    case UPDATE_PRODUCTS: {
      return {
        products: action.payload,
      };
    }

    case TOGGLE_WISHLIST_PROPERTY: {
      return {
        products: state.products.map((product) =>
          product._id === action.payload
            ? { ...product, inWishlist: !product.inWishlist }
            : product
        ),
      };
    }

    case TOGGLE_CART_PROPERTY: {
      return {
        products: state.products.map((product) =>
          product._id === action.payload
            ? { ...product, inCart: !product.inCart, cartQuantity: 1 }
            : product
        ),
      };
    }
    case INCREMENT_CART_QUANTITY: {
      return {
        products: state.products.map((product) =>
          product._id === action.payload
            ? { ...product, cartQuantity: product.cartQuantity + 1 }
            : product
        ),
      };
    }
    case DECREMENT_CART_QUANTITY: {
      return {
        products: state.products.map((product) =>
          product._id === action.payload
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

export { productReducer };
