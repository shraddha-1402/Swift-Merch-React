import { actionType, filterByAlbum, filterByCategory } from "../constants";

const filterReducer = (state, action) => {
  const { FILTER_ACTIONS } = actionType;
  const {
    FILTER_BY_CATEGORIES,
    FILTER_BY_ALBUMS,
    FILTER_BY_RATING,
    FILTER_BY_PRICE_RANGE,
    SORT_BY_PRICE,
    RESET_SORT,
    RESET_FILTER,
  } = FILTER_ACTIONS;

  switch (action.type) {
    case FILTER_BY_CATEGORIES:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.type === action.payload.toUpperCase()
            ? { ...category, status: !category.status }
            : category
        ),
      };
    case FILTER_BY_ALBUMS:
      return {
        ...state,
        albums: state.albums.map((album) =>
          album.type === action.payload.toUpperCase()
            ? { ...album, status: !album.status }
            : album
        ),
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortByPrice: action.payload,
      };
    case RESET_SORT:
      return {
        ...state,
        sortByPrice: 0,
      };
    case RESET_FILTER:
      return {
        ...state,
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
      };

    default:
      return state;
  }
};

export { filterReducer };
