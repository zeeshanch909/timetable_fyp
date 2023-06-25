
import React, { useState, useEffect } from 'react';

import { addRoom, getRooms } from '../state/actions/roomActions';

import {useSelector, useDispatch} from 'react-redux'



const RoomPage = () => {
  const [subjectss, setSubjectss] = useState([]);

  
  
  useEffect(() => {
    dispatch(getSubjects());
  }, []);
  const dispatch = useDispatch();
  
  
  
  const rooms = useSelector(state => state.room.rooms);
  
  // console.log(subjects)



  const [name, setName] = useState('');

  const handleSubjectAdd = () => {

    const sub = {name:name}

    dispatch(addSubject(sub))
    

  }
  return (
    <div>
      <h2>Subject Management </h2>

      <input type="text" value={name} onChange={(e) => setName(e.target.value) }  />

      <button  onClick={handleSubjectAdd} > add sub </button>

  

      {rooms.map((room,i) => (
        <h3 key={i} > {room.name} </h3>
      )  )}
      

     

    </div>
  );
};

export default RoomPage;

