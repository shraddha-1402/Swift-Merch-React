const filterByCategory = [
  "Music",
  "Clothes",
  "Accessories",
  "Tshirt",
  "Mobile_Cover",
];
const filterByAlbum = ["Fearless", "Red", "1989", "Reputation", "Lover"];
const filterByRating = [4, 3, 2, 1];

const sortingOptions = ["High_to_Low", "Low_to_High"];

const defaultUserDataState = {
  token: "",
  firstName: "",
  lastName: "",
  cart: [],
  wishlist: [],
};

const defaultFilterState = {
  categories: filterByCategory.map((category) => ({
    type: category.toUpperCase(),
    status: false,
  })),
  albums: filterByAlbum.map((album) => ({
    type: album.toUpperCase(),
    status: false,
  })),
  rating: 0,
  priceRange: 1000,
  sortByPrice: 0,
};

const routes = {
  HOME_PAGE: "/",
  PRODUCTS_PAGE: "/products-page",
  WISHLIST_PAGE: "/wishlist-page",
  CART_PAGE: "/cart-page",
  LOGIN_PAGE: "/login-page",
  SIGNUP_PAGE: "/signup-page",
  PROFILE_PAGE: "profile-page",
};

const actionType = {
  AUTH: {
    USER_LOGIN: "USER_LOGIN",
    USER_LOGOUT: "USER_LOGOUT",
  },
  DATA: {
    UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
    RESET_PRODUCTS: "RESET_PRODUCTS",
    SET_WISHLIST: "SET_WISHLIST",
    SET_CART: "SET_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
  },
  FILTER_ACTIONS: {
    FILTER_BY_CATEGORIES: "FILTER_BY_CATEGORIES",
    FILTER_BY_ALBUMS: "FILTER_BY_ALBUMS",
    FILTER_BY_RATING: "FILTER_BY_RATING",
    FILTER_BY_PRICE_RANGE: "FILTER_BY_PRICE_RANGE",
    SORT_BY_PRICE: "SORT_BY_PRICE",
    RESET_SORT: "RESET_SORT",
    RESET_FILTER: "RESET_FILTER",
  },
};

export {
  routes,
  actionType,
  defaultUserDataState,
  defaultFilterState,
  filterByAlbum,
  filterByCategory,
  filterByRating,
  sortingOptions,
};
