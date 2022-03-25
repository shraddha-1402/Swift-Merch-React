const getRatingFilteredProducts = (rating, productList) => {
  return rating
    ? productList.filter((product) => product.rating > rating)
    : productList;
};

export { getRatingFilteredProducts };
