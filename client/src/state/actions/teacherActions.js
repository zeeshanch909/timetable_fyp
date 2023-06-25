import { GET_TEACHERS  , ADD_TEACHER, UPDATE_TEACHER, DELETE_TEACHER, TEACHER_LOADING } from './types';
import axios from 'axios';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getTeachers = () => (dispatch, getState) => {
    dispatch(setTeacherLoading());

    // axios.get('/api/suRooms   tokenConfig(getState))
    axios.get('/api/teachers')
        .then(res => {
            dispatch({
                type: GET_TEACHERS,
                payload: res.data
            })
            // console.log(res.data);
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteTeacher = (id ) => (dispatch, getState) => {
    // axios.delete(`/api/subjects/${id}` ,tokenConfig(getState))
    axios.delete(`/api/teachers/${id}` )
        .then(res => dispatch({
            type: DELETE_TEACHER,
            payload: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};



export const addTeacher = (lead) => (dispatch, getState) => {
    // axios.post('/api/subjects', lead, tokenConfig(getState))
    axios.post('/api/teachers', lead)
        .then(res => dispatch({
            type: ADD_TEACHER,
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};







export const setTeacherLoading = () => {
    return {
        type: TEACHER_LOADING
    }
}