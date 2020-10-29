import { 
  SET_CURRENT_USER_INFO,
  REMOVE_CURRENT_USER_INFO 
} from "../Types/usersTypes";

export const SetCurrentUserInfo = (userInfo) => {
  return {
    type: SET_CURRENT_USER_INFO,
    payload: userInfo,
  };
};

export const RemoveCurrentUserInfo = () => {
  return {
    type: REMOVE_CURRENT_USER_INFO
  };
};
