import { SET_CURRENT_USER_INFO } from "../Types/usersTypes";

export const SetCurrentUserInfo = (userInfo) => {
  return {
    type: SET_CURRENT_USER_INFO,
    payload: userInfo,
  };
};
