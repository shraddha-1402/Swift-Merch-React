import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import PropTypes from "prop-types";
import { userDataReducer } from "../reducer/index";
import { actionType, defaultUserDataState } from "../constants";

const UserDataContext = createContext();
const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    defaultUserDataState
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const { firstName, lastName, email } = JSON.parse(
        localStorage.getItem("userData")
      );
      userDataDispatch({
        type: actionType.USER_ACTION.SAVE_USER_DATA,
        payload: {
          token,
          firstName,
          lastName,
          email,
          wishlist: [],
          cart: [],
        },
      });
    }
    setLoading(false);
  }, []);

  return (
    <UserDataContext.Provider value={{ userDataState, userDataDispatch }}>
      {!isLoading && children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.any,
};

export { useUserData, UserDataProvider };
