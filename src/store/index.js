import {
    createStore,
    combineReducers
} from "redux";

import {
    userReducer
} from "./reducers/userReducer";

import {
    medicineReducer
} from "./reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
    medicine: medicineReducer
});

const store = createStore(reducer);

export default store;