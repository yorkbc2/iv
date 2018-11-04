export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_END = "FETCH_USER_END";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const fetchUserStart = () => ({type: FETCH_USER_START});
export const fetchUserEnd = payload => ({type: FETCH_USER_END, payload});