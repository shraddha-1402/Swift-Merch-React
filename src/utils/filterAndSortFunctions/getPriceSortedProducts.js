const getPriceSortedProducts = (sortByPrice, productList) => {
  if (!sortByPrice) return productList;
  const newProductList = productList.sort((product1, product2) =>
    sortByPrice === "HIGH_TO_LOW"
      ? product2.price - product1.price
      : product1.price - product2.price
  );
  return newProductList.length ? newProductList : productList;
};

export { getPriceSortedProducts };
