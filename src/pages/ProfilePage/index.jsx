import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddressFormModal } from "../../components";
import { actionType, routes } from "../../constants";
import { useAddress, useAuth, useData } from "../../context";
import { deleteAddress } from "../../utils/services";

const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    authState: { userInfo, token },
    authDispatch,
  } = useAuth();
  const {
    dataState: { addresses },
    dataDispatch,
  } = useData();
  const { setShowAddressForm, setAddressInfo, setToEdit } = useAddress();
  const { firstName, lastName, email } = userInfo;

  const handleLogoutClick = () => {
    authDispatch({ type: actionType.AUTH.USER_LOGOUT });
    navigate(routes.HOME_PAGE);
  };

  return (
    <main className="flex-col align-center justify-center my-3-5">
      <AddressFormModal />

      <h1 className="m-1">Account</h1>

      <div className="p-1 flex-col">
        <div className="flex-row">
          <button className="account-tabs"> Profile </button>
          <button className="account-tabs"> Orders </button>
        </div>

        <p className="flex-row justify-spc-bet my-1">
          <span>Full Name:</span>
          <span>
            {firstName} {lastName}
          </span>
        </p>
        <p className="my-1">Email: {email}</p>
        <button className="btn btn-solid-danger" onClick={handleLogoutClick}>
          Logout
        </button>
        <button
          className="btn btn-outline-primary my-1"
          onClick={() => setShowAddressForm(true)}
        >
          Add Address
        </button>

        <ul className="list-style-none">
          {addresses?.map((address) => {
            return (
              <li key={address._id} className="card p-1 my-1">
                <div className="flex-row align-baseline gap-0-5">
                  <h3>{address.name}</h3>
                  <p>{address.phone}</p>
                </div>
                <p>
                  {address.street}, {address.city}, {address.zipCode}
                </p>
                <div>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setToEdit(true);
                      setAddressInfo(address);
                      setShowAddressForm(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      deleteAddress({ _id: address._id, token, dataDispatch })
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export { ProfilePage };

/* 
 const lsToken = localStorage.getItem("token");
  const lsSecret = localStorage.getItem("secret");
  if (lsToken !== null) {
    // axios.create({
    //   headers: { token: `Bearer ${lsToken}` },
    // });

    axios.post();
  }
  if (lsSecret !== null) {
    // axios.create({
    //   headers: { secret: lsSecret },
    // });
  }

if secret? {secret} else {token}
abstart({body:any, params:any, method:any, url:any })
*/
