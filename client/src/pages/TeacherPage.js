
import React, { useState, useEffect } from 'react';

import { addTeacher, getTeachers } from '../state/actions/teacherActions';

import {useSelector, useDispatch} from 'react-redux'



const TeacherPage = () => {


  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTeachers());
  }, []);
  
  
  
  const teachers = useSelector(state => state.teacher.teachers);
  
  console.log(teachers)



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleTeacherAdd = () => {

    const sub = {name:name, email:email}

    dispatch(addTeacher(sub))
    


  }
  return (
    <div>
      <h2>Subject Management</h2>
    
      <input type="text" value={name} onChange={(e) => setName(e.target.value) }  />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value) }  />

      <button  onClick={handleTeacherAdd} > add sub </button>

  

      {teachers.map((teacher,i) => (
        <>
        <h3 key={i} > {teacher.name} </h3> <br />
        <h3  > {teacher.email} </h3> <br />
        
        <hr />
        </>
      )  )}
      

     

    </div>
  );
};

export default TeacherPage

