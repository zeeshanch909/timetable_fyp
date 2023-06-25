// import React, { useState } from 'react';
// import { validateTimeSlotSchedule } from '../utils/scheduleUtils';

// const TimeSlotForm = () => {
//   const [schedule, setSchedule] = useState([]);

//   const [timeSlot, setTimeSlot] = useState({
//     startTime: '',
//     endTime: '',
//     // Add more fields as per your requirements
//   });

//   const handleChange = (e) => {
//     setTimeSlot({
//       ...timeSlot,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate time slot schedule
//     const isConflict = validateTimeSlotSchedule(schedule, newScheduleData);

//     if (isConflict) {
//       // Handle conflict scenario (e.g., display an error message, prevent saving)
//       console.log('Schedule conflict detected. Please choose a different time slot.');
//       return;
//     }

//     // Save the data or update the schedule
//     // ...
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Time Slot</h2>
//       <div>
//         <label htmlFor="startTime">Start Time:</label>
//         <input type="time" id="startTime" name="startTime" value={timeSlot.startTime} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="endTime">End Time:</label>
//         <input type="time" id="endTime" name="endTime" value={timeSlot.endTime} onChange={handleChange} />
//       </div>
//       {/* Add more fields and form inputs as per your requirements */}
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default TimeSlotForm;






import React, { useState } from 'react';

const TimeSlotForm = ({ onSubmit, onCancel, initialData }) => {
  const [timeSlot, setTimeSlot] = useState(initialData);

  const handleChange = (e) => {
    setTimeSlot({
      ...timeSlot,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(timeSlot);

    setTimeSlot({
      // Reset the form fields as per your requirements
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleDelete = () => {
    // Handle delete operation
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Time Slot' : 'Add Time Slot'}</h2>
      {/* Add form inputs for time slot details (e.g., start time, end time) */}
      <button type="submit">{initialData ? 'Update' : 'Save'}</button>
      {initialData && <button type="button" onClick={handleDelete}>Delete</button>}
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default TimeSlotForm;
