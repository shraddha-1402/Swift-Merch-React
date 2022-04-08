import React, { createContext, useContext, useReducer } from "react";
import { PropTypes } from "prop-types";
import { authReducer } from "../reducer";

const localStorageData = JSON.parse(localStorage.getItem("ecomData"));

const defaultAuthState = {
  token: localStorageData?.token | null,
  userInfo: localStorageData?.userInfo | {},
};

const AuthContext = createContext(defaultAuthState);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export { useAuth, AuthProvider };
