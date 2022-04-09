const getPriceRangeFilteredProducts = ({ priceRange, products }) => {
  const newProductList = products.filter(
    (product) => priceRange >= product.price
  );

  return newProductList;
};

export { getPriceRangeFilteredProducts };
