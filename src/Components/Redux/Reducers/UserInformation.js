import {
  SET_CURRENT_USER_INFO,
  REMOVE_CURRENT_USER_INFO,
} from "../Types/usersTypes";

import { deleteToken, existToken } from "../../Helpers/tokenFunctions";

const UserInformation = (state = { isLoggedUser: existToken() }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      return {
        currentUserInfo: action.payload,
        isLoggedUser: true,
      };

    case REMOVE_CURRENT_USER_INFO:
      deleteToken();
      return {
        currentUserInfo: null,
        isLoggedUser: false,
      };

    default:
      return state;
  }
};

export default UserInformation;
