import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { productReducer } from "../reducer/index";
import { actionType } from "../constants";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(productReducer, {
    products: [],
  });

  useEffect(async () => {
    const response = await axios.get("/api/products");
    if (response.status === 200)
      productsDispatch({
        type: actionType.PRODUCT_ACTIONS.UPDATE_PRODUCTS,
        payload: response.data.products,
      });
  }, []);

  return (
    <ProductContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.any,
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
