
import React, { useState, useEffect } from 'react';

import { addRoom, getRooms } from '../state/actions/roomActions';

import {useSelector, useDispatch} from 'react-redux'



const RoomPage = () => {

  
  
  useEffect(() => {
    dispatch(getRooms());
  }, []);
  const dispatch = useDispatch();
  
  
  
  const rooms = useSelector(state => state.room.rooms);
  
  console.log(rooms)



  const [name, setName] = useState('');

  const handleSubjectAdd = () => {

    const sub = {number:name}

    dispatch(addRoom(sub))
    

  }
  return (
    <div>
      <h2>room Management </h2>

      <input type="text" value={name} onChange={(e) => setName(e.target.value) }  />

      <button  onClick={handleSubjectAdd} > add sub </button>

  

      {rooms.map((room,i) => (
        <h3 key={i} > {room.number} </h3>
      )  )}
      

     

    </div>
  );
};

export default RoomPage;

