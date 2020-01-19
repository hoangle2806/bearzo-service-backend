import {  REGISTER_ERROR, REGISTER_SUCCESS  } from '../actions/types';

const initialState = {
    name: "",
    msg:""
}

const Account = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                name: action.payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }
};

export default Account;