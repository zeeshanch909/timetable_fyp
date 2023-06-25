
import React, { useState, useEffect } from 'react';

import { addTimeslot, getTimeslots } from '../state/actions/timeslotActions';

import {useSelector, useDispatch} from 'react-redux'



const TeacherPage = () => {


  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTimeslots());
  }, []);
  
  
  
  const timeslots = useSelector(state => state.timeslot.timeslots);
  
  console.log(timeslots)



  const [slotnumber, setSlotnumber] = useState('');
  const [starttime, setStarttime] = useState('');
  const [endtime, setEndtime] = useState('');

  const handleTimeSlotAdd = () => {

    const sub = {
      slotNumber: slotnumber, 
      startTime: starttime,
      endTime: endtime
    }

    dispatch(addTimeslot(sub))
    


  }
  return (
    <div>
      <h2>Time Management</h2>
    
      <input type="number " value={slotnumber} onChange={(e) => setSlotnumber(e.target.value) }  />
      <input type="text" value={starttime} onChange={(e) => setStarttime(e.target.value) }  />
      <input type="text" value={endtime} onChange={(e) => setEndtime(e.target.value) }  />

      <button  onClick={handleTimeSlotAdd} > add slot </button>

  

      {timeslots.map((timeslot,i) => (
        <>
        <h3 key={i} > {timeslot.startTime} </h3> <br />
        <h3  > {timeslot.endTime} </h3> <br />
        
        <hr />
        </>
      )  )}
      

     

    </div>
  );
};

export default TeacherPage

