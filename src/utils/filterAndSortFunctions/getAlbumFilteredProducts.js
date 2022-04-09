const getAlbumFilteredProducts = ({ albums, products }) => {
  let filterApplied = false;
  let newProductList = albums.reduce((acc, album) => {
    if (album.status) {
      filterApplied = true;
      return [
        ...acc,
        ...products.filter(
          (product) => product.album.toUpperCase() === album.type
        ),
      ];
    }
    return acc;
  }, []);

  return filterApplied ? newProductList : products;
};

export { getAlbumFilteredProducts };
