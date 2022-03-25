import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { routes } from "./constants";
import { HomePage, ProductListingPage } from "./pages/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path={routes.HOME_PAGE} />
        <Route element={<ProductListingPage />} path={routes.PRODUCTS_PAGE} />
      </Routes>
    </div>
  );
}

export default App;
