import { SET_CURRENT_USER_INFO } from "../Actions/Constants/UserActions";

const UserInformation = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      console.log(action.payload);
      return {
        ...state,
        currentUserInfo: action.payload,
      };

    default:
      return state;
  }
};

export default UserInformation;
