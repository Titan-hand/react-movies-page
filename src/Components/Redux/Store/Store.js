import { createStore } from "redux";

// All reducers
import rootReducer from "../Reducers";

const store = createStore(rootReducer);
 
export default store; 
