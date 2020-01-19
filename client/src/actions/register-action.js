import axios from 'axios';
import { REGISTER_ERROR, REGISTER_SUCCESS } from './types';

const register = ({ name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });
    console.log(body)

    try {
        const res = await axios.post(`/api/users`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err){
        const errors = err.response.data.errors;
        console.log(errors)
        dispatch({
            type: REGISTER_ERROR,
            payload: errors
        })
    }
}

export default register;