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
};

const actionType = {
  PRODUCT_ACTIONS: {
    UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
    RESET_PRODUCTS: "RESET_PRODUCTS",
    TOGGLE_WISHLIST_PROPERTY: "TOGGLE_WISHLIST_PROPERTY",
    TOGGLE_CART_PROPERTY: "TOGGLE_CART_PROPERTY",
    INCREMENT_CART_QUANTITY: "INCREMENT_CART_QUANTITY",
    DECREMENT_CART_QUANTITY: "DECREMENT_CART_QUANTITY",
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
  defaultFilterState,
  filterByAlbum,
  filterByCategory,
  filterByRating,
  sortingOptions,
};
