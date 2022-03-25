const getCategoryFilteredProducts = (categories, productList) => {
  const activeCategoryList = categories.filter((category) => category.status);
  if (activeCategoryList.length)
    return activeCategoryList.reduce((acc, category) => {
      if (category.status) {
        return [
          ...acc,
          ...productList.filter(
            (product) => product.category.toUpperCase() === category.type
          ),
        ];
      }
      return acc;
    }, []);
  return [...productList];
};

export { getCategoryFilteredProducts };
