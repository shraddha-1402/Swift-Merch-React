const getRatingFilteredProducts = ({ rating, products }) => {
  return rating
    ? products.filter((product) => product.rating > rating)
    : products;
};

export { getRatingFilteredProducts };
