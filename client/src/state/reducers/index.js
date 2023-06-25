import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import mailReducer from "./mailReducer";
import subjectReducer from "./subjectReducer";
import roomReducer from "./roomReducer";


export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    

    mail: mailReducer,
    subject : subjectReducer,
    room: roomReducer


})
