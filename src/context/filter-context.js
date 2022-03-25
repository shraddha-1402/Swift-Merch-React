import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { filterReducer } from "../reducer/index";
import { defaultFilterState } from "../constants";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    defaultFilterState
  );
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.any,
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
