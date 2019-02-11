import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import ActiveUser from './activeuser';

const allReducer = combineReducers({
    users: userReducer,
    activeUser: ActiveUser
})

export default allReducer;