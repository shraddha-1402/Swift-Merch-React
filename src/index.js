import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider, FilterProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
