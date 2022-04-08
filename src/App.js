import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { routes } from "./constants";
import { useAuth } from "./context";
import {
  HomePage,
  ProductListingPage,
  WishlistPage,
  LoginPage,
  SignupPage,
  ProfilePage,
  CartPage,
} from "./pages/";

function App() {
  const {
    authState: { token },
  } = useAuth();
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
        <Route
          element={
            token ? <WishlistPage /> : <Navigate to={routes.LOGIN_PAGE} />
          }
          path={routes.WISHLIST_PAGE}
        />
        <Route
          element={token ? <CartPage /> : <Navigate to={routes.LOGIN_PAGE} />}
          path={routes.CART_PAGE}
        />
      </Routes>
    </div>
  );
}

export default App;
