import {
    TIMESLOT_LOADING,
    ADD_TIMESLOT,
    GET_TIMESLOTS,
    DELETE_TIMESLOT,
    UPDATE_TIMESLOT,



} from "../actions/types";


const initialState = {
    timeslots:[],    
    loading:false

}



export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TIMESLOTS:
            return {
                ...state,
                timeslots: action.payload,
                loading: false
            };
        case DELETE_TIMESLOT:
            return {
                ...state,
                timeslots: state.subjects.filter(timeslot => timeslot._id !== action.payload)
            };
        case ADD_TIMESLOT:
            return {
                ...state,
                timeslots: [action.payload, ...state.timeslots]
            };
        case UPDATE_TIMESLOT:
            return {
                ...state,
                timeslots: [ ...state.timeslots]
                

            };
        case TIMESLOT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}