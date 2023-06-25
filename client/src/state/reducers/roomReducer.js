import {
    ROOM_LOADING,
    ADD_ROOM,
    GET_ROOMS,
    DELETE_ROOM,
    UPDATE_ROOM,


} from "../actions/types";


const initialState = {
    rooms:[],    
    loading:false

}



export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {
                ...state,
                rooms: action.payload,
                loading: false
            };
        case DELETE_ROOM:
            return {
                ...state,
                rooms: state.subjects.filter(room => room._id !== action.payload)
            };
        case ADD_ROOM:
            return {
                ...state,
                rooms: [action.payload, ...state.rooms]
            };
        case UPDATE_ROOM:
            return {
                ...state,
                rooms: [ ...state.rooms]
                

            };
        case ROOM_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}