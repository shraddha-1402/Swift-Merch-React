import "./style.css";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../constants";

const ProfilePage = () => {
  const tabArray = [
    {
      text: "Profile",
      link: routes.PROFILE_PAGE,
    },
    {
      text: "Orders",
      link: routes.ORDERS_PAGE,
    },
  ];
  return (
    <main className="flex-col align-center justify-center mw-28r my-2 mx-auto p-1">
      <h1 className="mb-1">Account</h1>

      <div className="account-section">
        <div className="flex-row">
          {tabArray.map(({ text, link }) => {
            return (
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? "account-tabs account-tabs-active" : "account-tabs"
                }
                end
                key={text}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export { ProfilePage };
