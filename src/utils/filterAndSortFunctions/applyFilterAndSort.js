import { getProductsBySearchText } from "./getProductsBySearchText";
import {
  getAlbumFilteredProducts,
  getCategoryFilteredProducts,
  getRatingFilteredProducts,
  getPriceSortedProducts,
  getPriceRangeFilteredProducts,
} from "./index";

const applyFilterAndSort = ({ state, products }) => {
  let filteredProductList = getCategoryFilteredProducts({
    categories: state.categories,
    products,
  });
  filteredProductList = getAlbumFilteredProducts({
    albums: state.albums,
    products: filteredProductList,
  });
  filteredProductList = getRatingFilteredProducts({
    rating: state.rating,
    products: filteredProductList,
  });
  filteredProductList = getPriceRangeFilteredProducts({
    priceRange: state.priceRange,
    products: filteredProductList,
  });

  console.log(filteredProductList);

  filteredProductList = getProductsBySearchText({
    searchText: state.searchText,
    products: filteredProductList,
  });

  const sortedProductList = getPriceSortedProducts({
    sortByPrice: state.sortByPrice,
    products: filteredProductList,
  });

  return sortedProductList;
};

export { applyFilterAndSort };
