import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import mailReducer from "./mailReducer";
import subjectReducer from "./subjectReducer";


export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    

    mail: mailReducer,
    subject : subjectReducer


})
