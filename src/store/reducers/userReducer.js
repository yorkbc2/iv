import {
    FETCH_USER_END,
    FETCH_USER_START,
    FETCH_USER_ERROR
} from "./../actions/userActions";

export function userReducer (state={
    name: {
        first: "",
        last: ""
    },
    email: "",
    address: "",
    number: "",
    fetching: false,
    fetched: false,
    error: false
}, {type, payload}) {
    switch (type) {
        case FETCH_USER_START: {
            return Object.assign({}, state, {fetching: true});
        }
        case FETCH_USER_END: {
            console.log(payload)
            return Object.assign({}, state, {fetching: false, fetched: true}, payload);
        }
        case FETCH_USER_ERROR: {
            return Object.assign({}, state, {fetching: false, error: payload});
        }
        default: {
            return state;
        }
    }
}