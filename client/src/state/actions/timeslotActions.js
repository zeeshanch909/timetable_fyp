import { GET_TIMESLOTS  , ADD_TIMESLOT, UPDATE_TIMESLOT, DELETE_TIMESLOT, TIMESLOT_LOADING } from './types';
import axios from 'axios';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getTimeslots = () => (dispatch, getState) => {
    dispatch(setTimeslotLoading());

    // axios.get('/api/suRooms   tokenConfig(getState))
    axios.get('/api/timeSlots')
        .then(res => {
            dispatch({
                type: GET_TIMESLOTS,
                payload: res.data
            })
            // console.log(res.data);
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteTimelsot = (id ) => (dispatch, getState) => {
    // axios.delete(`/api/subjects/${id}` ,tokenConfig(getState))
    axios.delete(`/api/timeSlots/${id}` )
        .then(res => dispatch({
            type: DELETE_TIMESLOT,
            payload: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};



export const addTimeslot = (lead) => (dispatch, getState) => {
    // axios.post('/api/subjects', lead, tokenConfig(getState))
    axios.post('/api/timeSlots', lead)
        .then(res => dispatch({
            type: ADD_TIMESLOT,
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};







export const setTimeslotLoading = () => {
    return {
        type: TIMESLOT_LOADING
    }
}