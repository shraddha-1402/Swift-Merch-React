import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useAddress, useData } from "../../context";

const ChangeAddressModal = ({ setShowChangeAddressModal }) => {
  const {
    dataState: { addresses },
  } = useData();

  const { setDeliveryAddress, deliveryAddress } = useAddress();
  return (
    <div className="modal-overlay">
      <div className="modal-box gap-1 mw-28r pos-rel">
        <FaTimes
          className="pos-abs card-badge-left curr-pointer"
          onClick={() => setShowChangeAddressModal(false)}
        />
        {addresses.map((address) => {
          return (
            <div className="flex-row" key={address._id}>
              <input
                type="radio"
                name="delivery-address"
                className="m-0-5"
                checked={deliveryAddress._id === address._id}
                onChange={() => setDeliveryAddress(address)}
              />
              <div>
                <h3>{address.name}</h3>
                <p>
                  {address.street}, {address.city}, {address.zipCode}
                </p>
                <p>{address.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ChangeAddressModal.propTypes = {
  setShowChangeAddressModal: PropTypes.func,
};

export { ChangeAddressModal };
