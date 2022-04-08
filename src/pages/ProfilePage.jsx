import React from "react";
import { useNavigate } from "react-router-dom";
import { actionType, routes } from "../constants";
import { useData, useAuth } from "../context";

const ProfilePage = () => {
  const {
    authState: { userInfo },
    userDataDispatch,
  } = useAuth();
  const { firstName, lastName, email } = userInfo;
  const { dataDispatch } = useData();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    userDataDispatch({ type: actionType.USER_ACTION.USER_LOGOUT });
    dataDispatch({
      type: actionType.PRODUCT_ACTIONS.RESET_PRODUCTS,
    });
    navigate(routes.HOME_PAGE);
  };

  return (
    <main className="flex-row align-center justify-center my-3-5">
      <div>
        <h1 className="m-1">Profile Details</h1>
        <div className="mw-40r mx-auto p-1">
          <p className="my-1">
            Full Name: {firstName} {lastName}
          </p>
          <p className="my-1">Email: {email}</p>
          <p className="my-1">Address: </p>
          <button className="btn btn-solid-danger" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export { ProfilePage };
