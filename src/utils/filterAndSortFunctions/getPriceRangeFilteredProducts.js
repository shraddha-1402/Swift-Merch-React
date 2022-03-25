const getPriceRangeFilteredProducts = (priceRange, productList) => {
  const newProductList = productList.filter(
    (product) => priceRange >= product.price
  );

  return newProductList;
};

export { getPriceRangeFilteredProducts };
