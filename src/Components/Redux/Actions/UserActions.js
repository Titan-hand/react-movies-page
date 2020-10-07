import { SET_CURRENT_USER_INFO } from "./Constants/UserActions";

export const SetCurrentUserInfo = (userInfo) => {
  return {
    type: SET_CURRENT_USER_INFO,
    payload: userInfo,
  };
};
