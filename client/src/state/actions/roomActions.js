import { GET_ROOMS, ADD_ROOM, UPDATE_ROOM, DELETE_ROOM, ROOM_LOADING } from './types';
import axios from 'axios';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getRooms = () => (dispatch, getState) => {
    dispatch(setRoomLoading());

    // axios.get('/api/suRooms   tokenConfig(getState))
    axios.get('/api/rooms')
        .then(res => {
            dispatch({
                type: GET_ROOMS,
                payload: res.data
            })
            // console.log(res.data);
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteRoom = (id ) => (dispatch, getState) => {
    // axios.delete(`/api/subjects/${id}` ,tokenConfig(getState))
    axios.delete(`/api/rooms/${id}` )
        .then(res => dispatch({
            type: DELETE_ROOM,
            payload: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};



export const addRoom = (lead) => (dispatch, getState) => {
    // axios.post('/api/subjects', lead, tokenConfig(getState))
    axios.post('/api/rooms', lead)
        .then(res => dispatch({
            type: ADD_ROOM,
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};







export const setRoomLoading = () => {
    return {
        type: ROOM_LOADING
    }
}