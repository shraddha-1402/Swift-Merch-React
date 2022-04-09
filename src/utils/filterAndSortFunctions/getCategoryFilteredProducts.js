const getCategoryFilteredProducts = ({ categories, products }) => {
  const activeCategoryList = categories.filter((category) => category.status);
  if (activeCategoryList.length)
    return activeCategoryList.reduce((acc, category) => {
      if (category.status) {
        return [
          ...acc,
          ...products?.filter(
            (product) => product.category.toUpperCase() === category.type
          ),
        ];
      }
      return acc;
    }, []);
  return [...products];
};

export { getCategoryFilteredProducts };
