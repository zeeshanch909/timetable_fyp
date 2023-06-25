import {
    SUBJECT_LOADING,
    ADD_SUBJECT,
    GET_SUBJECTS,
    DELETE_SUBJECT,
    UPDATE_SUBJECT,


} from "../actions/types";


const initialState = {
    subjects:[],    
    loading:false

}



export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload,
                loading: false
            };
        case DELETE_SUBJECT:
            return {
                ...state,
                subjects: state.subjects.filter(subject => subject._id !== action.payload)
            };
        case ADD_SUBJECT:
            return {
                ...state,
                subjects: [action.payload, ...state.subjects]
            };
        case UPDATE_SUBJECT:
            return {
                ...state,
                subjects: [ ...state.subjects]
                

            };
        case SUBJECT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}