import {
    TEACHER_LOADING,
    ADD_TEACHER,
    GET_TEACHERS,
    DELETE_TEACHER,
    UPDATE_TEACHER,



} from "../actions/types";


const initialState = {
    teachers:[],    
    loading:false

}



export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload,
                loading: false
            };
        case DELETE_TEACHER:
            return {
                ...state,
                teachers: state.subjects.filter(teacher => teacher._id !== action.payload)
            };
        case ADD_TEACHER:
            return {
                ...state,
                teachers: [action.payload, ...state.teachers]
            };
        case UPDATE_TEACHER:
            return {
                ...state,
                teachers: [ ...state.teachers]
                

            };
        case TEACHER_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}