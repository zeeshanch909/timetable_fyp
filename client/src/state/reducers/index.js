import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import mailReducer from "./mailReducer";
import subjectReducer from "./subjectReducer";
import roomReducer from "./roomReducer";
import teacherReducer from "./teacherReducer";
import timeslotReducer from "./timeslotReducer";


export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    

    mail: mailReducer,
    subject : subjectReducer,
    room: roomReducer,
    teacher: teacherReducer,
    timeslot: timeslotReducer


})
