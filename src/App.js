import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import { Navbar, OrdersTab, ProfileTab } from "./components";
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
  SingleProduct,
} from "./pages/";
import { AddressFormModal } from "./components";

function App() {
  const {
    authState: { token },
  } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <AddressFormModal />

      <Routes>
        <Route element={<HomePage />} path={routes.HOME_PAGE} />
        <Route element={<ProductListingPage />} path={routes.PRODUCTS_PAGE} />
        <Route
          element={<SingleProduct />}
          path={`${routes.PRODUCTS_PAGE}/:productId`}
        />
        <Route element={<LoginPage />} path={routes.LOGIN_PAGE} />
        <Route element={<SignupPage />} path={routes.SIGNUP_PAGE} />
        <Route
          element={
            token ? <ProfilePage /> : <Navigate to={routes.LOGIN_PAGE} />
          }
          path={routes.PROFILE_PAGE}
        >
          <Route element={<ProfileTab />} path={routes.PROFILE_PAGE} />
          <Route element={<OrdersTab />} path={routes.ORDERS_PAGE} />
        </Route>
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
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        position="bottom-right"
        theme="colored"
      />
    </div>
  );
}

export default App;
