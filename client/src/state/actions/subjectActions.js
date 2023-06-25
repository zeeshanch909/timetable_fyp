import { GET_SUBJECTS, ADD_SUBJECT, UPDATE_SUBJECT, DELETE_SUBJECT, SUBJECT_LOADING } from './types';
import axios from 'axios';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getSubjects = () => (dispatch, getState) => {
    dispatch(setSubjectLoading());

    // axios.get('/api/subjects',   tokenConfig(getState))
    axios.get('/api/subjects')
        .then(res => {
            dispatch({
                type: GET_SUBJECTS,
                payload: res.data
            })
            // console.log(res.data);
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};


export const deleteSubject = (id ) => (dispatch, getState) => {
    // axios.delete(`/api/subjects/${id}` ,tokenConfig(getState))
    axios.delete(`/api/subjects/${id}` )
        .then(res => dispatch({
            type: DELETE_SUBJECT,
            payload: id
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};



export const addSubject = (lead) => (dispatch, getState) => {
    // axios.post('/api/subjects', lead, tokenConfig(getState))
    axios.post('/api/subjects', lead)
        .then(res => dispatch({
            type: ADD_SUBJECT,
            payload: res.data
        }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};







export const setSubjectLoading = () => {
    return {
        type: SUBJECT_LOADING
    }
}