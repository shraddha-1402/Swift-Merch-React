import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { defaultAddressState } from "../constants";
import { useData } from "./";

const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const {
    dataState: { addresses },
  } = useData();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [addressInfo, setAddressInfo] = useState(defaultAddressState);
  const [deliveryAddress, setDeliveryAddress] = useState(
    addresses?.length ? addresses[0] : null
  );

  useEffect(
    () => setDeliveryAddress(addresses?.length ? addresses[0] : null),
    [addresses]
  );

  return (
    <AddressContext.Provider
      value={{
        addressInfo,
        setAddressInfo,
        showAddressForm,
        setShowAddressForm,
        toEdit,
        setToEdit,
        deliveryAddress,
        setDeliveryAddress,
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
