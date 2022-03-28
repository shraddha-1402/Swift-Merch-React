import { defaultUserDataState, actionType } from "../constants";

const userDataReducer = (state, action) => {
  const { USER_ACTION } = actionType;
  const { SAVE_USER_DATA, USER_LOGOUT } = USER_ACTION;

  switch (action.type) {
    case SAVE_USER_DATA: {
      return { ...action.payload };
    }

    case USER_LOGOUT:
      localStorage.clear();
      return {
        ...defaultUserDataState,
      };

    default:
      return state;
  }
};

export { userDataReducer };
