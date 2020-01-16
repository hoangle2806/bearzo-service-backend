import { SET_TEST, SET_ZERO } from './types';

const fetchData = () => dispatch => {
    dispatch({
        type: SET_TEST,
        payload: "This is a test"
    })
}

export default fetchData;