import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { routes } from "./constants";
import { HomePage } from "./pages/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path={routes.HOME_PAGE} />
      </Routes>
    </div>
  );
}

export default App;
