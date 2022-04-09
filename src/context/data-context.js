import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { dataReducer } from "../reducer";
import { actionType } from "../constants";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    products: [],
    wishlist: [],
    cart: [],
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      if (response.status === 200)
        dataDispatch({
          type: actionType.DATA.UPDATE_PRODUCTS,
          payload: {
            products: response.data.products,
          },
        });
    })();
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any,
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
