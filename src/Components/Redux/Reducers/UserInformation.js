import {
  SET_CURRENT_USER_INFO,
  REMOVE_CURRENT_USER_INFO,
} from "../Actions/Constants/UserActions";

const UserInformation = (state = {}, action) => {

  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      // console.log("Usuario logeado: ", action.payload)
      return {
        currentUserInfo: action.payload,
        isLoggedUser: true,
      };

    case REMOVE_CURRENT_USER_INFO:
      return {
        ...state,
        currentUserInfo: null,
        isLoggedUser: false,
      };

    default:
      return state;
  }
};

export default UserInformation;
