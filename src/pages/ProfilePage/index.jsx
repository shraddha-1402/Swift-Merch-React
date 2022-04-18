import "./style.css";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
    <main className="flex-col align-center justify-center mw-28r my-2 mx-auto p-1">
      <h1 className="mb-1">Account</h1>

      <div className="p-1 account-section">
        <div className="flex-row">
          <button className="account-tabs"> Profile </button>
          <button className="account-tabs"> Orders </button>
        </div>

        <div className="my-1">
          <p className="my-0-5">
            <span className="disp-inline-block w-30p mr-0-5">Full Name:</span>
            {firstName} {lastName}
          </p>
          <p className="my-0-5">
            <span className="disp-inline-block w-30p mr-0-5">Email:</span>
            {email}
          </p>
        </div>

        <button
          className="btn btn-outline-primary my-1"
          onClick={() => setShowAddressForm(true)}
        >
          <FaPlus /> Add Address
        </button>

        <ul className="list-style-none">
          {addresses?.map((address) => {
            return (
              <li key={address._id} className="card p-1 my-1">
                <h3>{address.name}</h3>
                <p>
                  {address.street}, {address.city}, {address.zipCode}
                </p>
                <p>Phone: {address.phone}</p>

                <div className="flex-row gap-1 mt-1">
                  <button
                    className="btn-solid-primary sm-btn curr-pointer"
                    onClick={() => {
                      setToEdit(true);
                      setAddressInfo(address);
                      setShowAddressForm(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="sm-btn curr-pointer"
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

        <button
          className="btn btn-solid-danger mt-1"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
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
