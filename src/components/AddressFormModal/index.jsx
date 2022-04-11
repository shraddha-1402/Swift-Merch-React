import "./style.css";
import React from "react";
import { defaultAddressState, dummyAddress, states } from "../../constants";
import { useAuth, useData, useAddress } from "../../context";
import { addAddress, editAddress } from "../../utils/services";

const AddressFormModal = () => {
  const {
    authState: { token },
  } = useAuth();
  const { dataDispatch } = useData();
  const {
    addressInfo,
    setAddressInfo,
    showAddressForm,
    setShowAddressForm,
    toEdit,
  } = useAddress();

  const handleCancelClick = () => {
    setShowAddressForm(false);
    setAddressInfo(defaultAddressState);
  };

  const handleInputChange = (e) => {
    setAddressInfo((addressInfo) => ({
      ...addressInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddressFormSubmit = async (e) => {
    e.preventDefault();
    if (toEdit)
      await editAddress({ address: addressInfo, token, dataDispatch });
    else await addAddress({ address: addressInfo, token, dataDispatch });
    setShowAddressForm(false);
  };

  return (
    !!showAddressForm && (
      <div className="modal-overlay">
        <div className="modal-box">
          <h2 className="my-0-5">
            {toEdit ? "Edit Address" : "Add New Address"}
          </h2>
          <form onSubmit={handleAddressFormSubmit}>
            <input
              className="input std-input my-0-5"
              type="text"
              name="name"
              value={addressInfo?.name}
              placeholder="Enter name"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              className="input std-input my-0-5"
              type="text"
              value={addressInfo.street}
              name="street"
              placeholder="Enter house no., street, colony"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
            <select
              className="input std-input my-0-5"
              name="state"
              value={addressInfo.state}
              onChange={handleInputChange}
            >
              <option value=""></option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              className="input std-input my-0-5"
              type="text"
              name="city"
              value={addressInfo.city}
              placeholder="Enter city"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              className="input std-input my-0-5"
              type="number"
              name="zipCode"
              value={addressInfo.zipCode}
              placeholder="Enter zip code"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              className="input std-input my-0-5"
              type="tel"
              name="phone"
              value={addressInfo.phone}
              placeholder="Enter mobile number"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
            <div className="flex-row gap-1 my-1 flex-wrap">
              <button type="submit" className="btn btn-solid-primary">
                Save Address
              </button>
              {!toEdit && (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setAddressInfo(dummyAddress)}
                >
                  Fill Dummy Address
                </button>
              )}
              <button
                onClick={handleCancelClick}
                className="btn btn-outline-primary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export { AddressFormModal };
