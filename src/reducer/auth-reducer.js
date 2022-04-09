import { actionType } from "../constants";

const authReducer = (state, action) => {
  const {
    AUTH: { USER_LOGIN, USER_LOGOUT },
  } = actionType;
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        token: payload.token,
        userInfo: payload.userInfo,
      };

    case USER_LOGOUT:
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
