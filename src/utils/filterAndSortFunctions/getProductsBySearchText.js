const getProductsBySearchText = ({ searchText, products }) => {
  return products.filter((product) =>
    product.name.toUpperCase().includes(searchText.toUpperCase())
  );
};

export { getProductsBySearchText };
