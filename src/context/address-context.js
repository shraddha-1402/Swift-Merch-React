import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { defaultAddressState } from "../constants";

const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [addressInfo, setAddressInfo] = useState(defaultAddressState);
  return (
    <AddressContext.Provider
      value={{
        addressInfo,
        setAddressInfo,
        showAddressForm,
        setShowAddressForm,
        toEdit,
        setToEdit,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

AddressProvider.propTypes = {
  children: PropTypes.any,
};

export { useAddress, AddressProvider };
