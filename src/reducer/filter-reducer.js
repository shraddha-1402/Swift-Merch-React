import { actionType, filterByAlbum, filterByCategory } from "../constants";

const filterReducer = (state, action) => {
  const {
    FILTER_ACTIONS: {
      FILTER_BY_CATEGORIES,
      FILTER_BY_ALBUMS,
      FILTER_BY_RATING,
      FILTER_BY_PRICE_RANGE,
      SORT_BY_PRICE,
      SEARCH_BY_NAME,
      RESET_SORT,
      RESET_FILTER,
    },
  } = actionType;

  const { type, payload } = action;

  switch (type) {
    case FILTER_BY_CATEGORIES:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.type === payload.category.toUpperCase()
            ? { ...category, status: !category.status }
            : category
        ),
      };
    case FILTER_BY_ALBUMS:
      return {
        ...state,
        albums: state.albums.map((album) =>
          album.type === payload.albums.toUpperCase()
            ? { ...album, status: !album.status }
            : album
        ),
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        rating: payload.rating,
      };
    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        priceRange: payload.priceRange,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortByPrice: payload.sortByPrice,
      };
    case SEARCH_BY_NAME:
      console.log(payload.searchText);
      return {
        ...state,
        searchText: payload.searchText,
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
