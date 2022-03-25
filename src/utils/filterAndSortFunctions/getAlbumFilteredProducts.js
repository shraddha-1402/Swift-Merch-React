const getAlbumFilteredProducts = (albums, productList) => {
  let filterApplied = false;
  let newProductList = albums.reduce((acc, album) => {
    if (album.status) {
      filterApplied = true;
      return [
        ...acc,
        ...productList.filter(
          (product) => product.album.toUpperCase() === album.type
        ),
      ];
    }
    return acc;
  }, []);

  return filterApplied ? newProductList : productList;
};

export { getAlbumFilteredProducts };
