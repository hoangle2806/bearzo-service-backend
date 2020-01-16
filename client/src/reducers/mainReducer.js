import { SET_ZERO, SET_TEST } from '../actions/types';


const initialState = {
    id: 1,
    msg: ''
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEST:
            return {
                ...state,
                msg: action.payload
            }
        case SET_ZERO:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }
};

export default mainReducer;