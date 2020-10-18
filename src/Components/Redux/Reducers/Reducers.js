import { combineReducers } from "redux";

//All Reducers
import UserInformation from "./UserInformation";
import Movies from "./Movies"
const reducers = combineReducers({ UserInformation, Movies });

export default reducers;
