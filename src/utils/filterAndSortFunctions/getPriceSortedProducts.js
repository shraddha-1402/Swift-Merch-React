const getPriceSortedProducts = ({ sortByPrice, products }) => {
  if (!sortByPrice) return products;
  const newProductList = products.sort((product1, product2) =>
    sortByPrice === "HIGH_TO_LOW"
      ? product2.price - product1.price
      : product1.price - product2.price
  );
  return newProductList.length ? newProductList : products;
};

export { getPriceSortedProducts };
