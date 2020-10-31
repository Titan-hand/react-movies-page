import { RESET_STORE } from '../Types/resetTypes';
// app reducers
import appReducers from './Reducers';

// reducer to reset all the store
function RootReducer(state, action) {
    if(action.type === RESET_STORE){
        state = undefined;
    }

    return appReducers(state, action);
}

export default RootReducer;