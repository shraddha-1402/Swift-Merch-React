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

const defaultAddressState = {
  name: "",
  state: "",
  street: "",
  city: "",
  zipCode: "",
  phone: "",
};

const dummyAddress = {
  name: "Shraddha",
  state: "Maharashtra",
  street: "408, Masoba Lane",
  city: "Nagpur",
  zipCode: "440018",
  phone: "8806946440",
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
  PROFILE_PAGE: "/profile-page",
  ORDERS_PAGE: "/profile-page/orders-page",
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
    SET_ADDRESSES: "SET_ADDRESSES",
    SET_ORDERS: "SET_ORDERS",
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

const coupons = [
  {
    couponCode: "NEW_USER",
    discount: 50,
    description: "Save flat 5% off on your first purchase",
  },
  {
    couponCode: "DIWALI_OFFER",
    discount: 500,
    description: "Save 500 Rs off on all your purchases above 3000",
  },
  {
    couponCode: "MEGA_SAVING_OFFER",
    discount: 2000,
    description: "Save 2000 Rs on all your purchases above 6000",
  },
];

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

export {
  routes,
  actionType,
  defaultAddressState,
  defaultFilterState,
  filterByAlbum,
  filterByCategory,
  filterByRating,
  sortingOptions,
  states,
  coupons,
  dummyAddress,
};
