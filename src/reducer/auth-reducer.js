import { actionType } from "../constants";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.AUTH.USER_LOGIN:
      return {
        ...state,
        token: payload.token,
        userInfo: payload.userInfo,
      };

    case actionType.AUTH.USER_LOGOUT:
      localStorage.clear();
      return {
        token: null,
        userInfo: {},
      };

    default:
      return { ...state };
  }
};

export { authReducer };
