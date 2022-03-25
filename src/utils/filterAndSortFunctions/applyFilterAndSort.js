import {
  getAlbumFilteredProducts,
  getCategoryFilteredProducts,
  getRatingFilteredProducts,
  getPriceSortedProducts,
  getPriceRangeFilteredProducts,
} from "./index";

const applyFilterAndSort = (state, productsState) => {
  let filteredProductList = getCategoryFilteredProducts(
    state.categories,
    productsState.products
  );
  filteredProductList = getAlbumFilteredProducts(
    state.albums,
    filteredProductList
  );
  filteredProductList = getRatingFilteredProducts(
    state.rating,
    filteredProductList
  );
  filteredProductList = getPriceRangeFilteredProducts(
    state.priceRange,
    filteredProductList
  );

  const sortedProductList = getPriceSortedProducts(
    state.sortByPrice,
    filteredProductList
  );

  return sortedProductList;
};

export { applyFilterAndSort };
