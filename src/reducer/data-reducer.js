import { actionType } from "../constants";

const dataReducer = (state, action) => {
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
    case SET_WISHLIST: {
      return {
        products: state.products.map((product) => {
          return action.payload.find((element) => element._id === product._id)
            ? { ...product, inWishlist: true }
            : product;
        }),
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

    case SET_CART: {
      return {
        products: state.products.map((product) => {
          return action.payload.find((element) => element._id === product._id)
            ? { ...product, inCart: true }
            : product;
        }),
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

export { dataReducer };
