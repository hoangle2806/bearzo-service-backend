import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import Account from './account-reducer';

export default combineReducers({
    mainReducer,
    Account
});