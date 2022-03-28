import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { routes } from "./constants";
import { useUserData } from "./context";
import {
  HomePage,
  ProductListingPage,
  LoginPage,
  SignupPage,
  ProfilePage,
} from "./pages/";

function App() {
  const {
    userDataState: { token },
  } = useUserData();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path={routes.HOME_PAGE} />
        <Route element={<ProductListingPage />} path={routes.PRODUCTS_PAGE} />
        <Route element={<LoginPage />} path={routes.LOGIN_PAGE} />
        <Route element={<SignupPage />} path={routes.SIGNUP_PAGE} />
        <Route
          element={
            token ? <ProfilePage /> : <Navigate to={routes.LOGIN_PAGE} />
          }
          path={routes.PROFILE_PAGE}
        />
      </Routes>
    </div>
  );
}

export default App;
