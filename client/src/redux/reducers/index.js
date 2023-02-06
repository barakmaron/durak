import { combineReducers } from "redux";
import { reducer } from 'redux-form';
import ApiReducer from './ApiReducer';
import UserReducer from './UserReducer';


export default combineReducers({
    ApiReducer,
    UserReducer,
    form: reducer
});