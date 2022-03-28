import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import { useProduct, useUserData } from "../context/";
import { authHandler } from "../utils/services/";
import { routes } from "../constants";

const LoginPage = () => {
  const handleInputChange = (event, property) => {
    property === "email"
      ? setLoginCredentials((creds) => ({
          ...creds,
          email: event.target.value,
        }))
      : setLoginCredentials((creds) => ({
          ...creds,
          password: event.target.value,
        }));
  };

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginCredentials;

  const navigate = useNavigate();
  const { userDataDispatch } = useUserData();
  const { productsDispatch } = useProduct();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      const res = await authHandler(
        loginCredentials,
        "login",
        userDataDispatch,
        productsDispatch
      );
      if (res.status === 200) navigate(routes.PRODUCTS_PAGE);
    }
  };

  return (
    <main className="card mw-28r p-1 my-3-5 mx-auto">
      <h1 className="center-text my-0-5">Login</h1>
      <div className="m-1">
        <form onSubmit={handleLoginSubmit}>
          <FormInput
            label="Email"
            type="email"
            value={email}
            property="email"
            changeHandler={handleInputChange}
          />

          <FormInput
            label="Password"
            type="password"
            value={password}
            property="password"
            changeHandler={handleInputChange}
          />

          <button
            type="button"
            className="btn btn-outline-primary w-100p my-0-25 mt-1 text-bold-weight"
            onClick={() => {
              setLoginCredentials({
                email: "test@gmail.com",
                password: "test123",
              });
            }}
          >
            Fill Test Credentials
          </button>

          <button
            type="submit"
            className="btn btn-solid-primary w-100p my-0-25 mt-1 text-bold-weight"
          >
            LOGIN
          </button>
        </form>

        <p className="sm-text my-0-5">
          Do not have an account yet?{" "}
          <Link
            to={routes.SIGNUP_PAGE}
            className="link primary-text hover-underline"
          >
            SignUp
          </Link>
        </p>
      </div>
    </main>
  );
};

export { LoginPage };
