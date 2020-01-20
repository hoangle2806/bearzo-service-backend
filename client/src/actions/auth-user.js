import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_ERROR } from './types';

const login = ({ email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`/api/auth`, body, config);
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err){
        const errors = err.response.data.errors;
        console.log(errors)
        dispatch({
            type: LOGIN_ERROR,
            payload: errors
        })
    }
}

export default login;