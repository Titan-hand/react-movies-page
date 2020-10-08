import { createStore } from "redux";

// All reducers
import reducers from "../Reducers/Reducers";

const store = createStore(reducers);

export default store;
