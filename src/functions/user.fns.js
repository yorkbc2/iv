import axios from "axios";
import {
    fetchUserStart,
    fetchUserEnd
} from "./../store/actions/userActions";
import {VERIFY_USER, REGISTER_USER} from "./../config/api";

export const checkUser = (dispatch, resultCallback) => {
    dispatch(fetchUserStart());

    const storageData = {
        _id: localStorage.getItem("_id"),
        _token: localStorage.getItem("_token")
    };

    if (storageData._id == null || storageData._token == null) {
        return resultCallback(false);
    }

    axios.post(VERIFY_USER, storageData)
        .then(response => {
            dispatch(fetchUserEnd(response.data.user));
            resultCallback(true);
        });
}

export const registerUser = (dispatch, data, successCallback, errorCallback) => {
    axios.post(REGISTER_USER, data)
        .then(response => {
            const storageData = response.data;
            
            if (storageData._token && storageData._id)
            {
                localStorage.setItem("_token", storageData._token);
                localStorage.setItem("_id", storageData._id);
    
                dispatch(fetchUserEnd(storageData));
                successCallback();                
            }
        })
        .catch(error => {
            if (typeof errorCallback === 'function') errorCallback(error);
        });
};