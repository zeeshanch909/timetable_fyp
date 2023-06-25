
import React, { useState, useEffect } from 'react';

import { getSubjects, addSubject } from '../state/actions/subjectActions';

import {useSelector, useDispatch} from 'react-redux'



const SubjectPage = () => {
  const [subjectss, setSubjectss] = useState([]);

  
  
  useEffect(() => {
    dispatch(getSubjects());
  }, []);
  const dispatch = useDispatch();
  
  
  
  const subjects = useSelector(state => state.subject.subjects);
  
  console.log(subjects)



  const [name, setName] = useState('');

  const handleSubjectAdd = () => {

    const sub = {name:name}

    dispatch(addSubject(sub))
    
    setSubjectss(subjects)

  }
  return (
    <div>
      <h2>Subject Management</h2>
    
      <input type="text" value={name} onChange={(e) => setName(e.target.value) }  />

      <button  onClick={handleSubjectAdd} > add sub </button>

  

      {subjects.map((subject,i) => (
        <h3 key={i} > {subject.name} </h3>
      )  )}
      

     

    </div>
  );
};

export default SubjectPage;

