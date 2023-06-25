import React from 'react';

const TimeSlotList = () => {
  // Fetch the list of time slots from your application state or API
  const timeSlots = [
    { id: 1, startTime: '8:30 AM', endTime: '10:00 AM' },
    { id: 2, startTime: '10:00 AM', endTime: '11:30 AM' },
    { id: 3, startTime: '11:30 AM', endTime: '1:00 PM' },
    { id: 4, startTime: '1:30 PM', endTime: '3:00 PM' },
    { id: 5, startTime: '3:00 PM', endTime: '4:30 PM' },
    { id: 6, startTime: '4:30 PM', endTime: '6:00 PM' },
  ];

  return (
    <div>
      <h2>Time Slot List</h2>
      {timeSlots.length === 0 ? (
        <p>No time slots available</p>
      ) : (
        <ul>
          {timeSlots.map((timeSlot) => (
            <li key={timeSlot.id}>
              {timeSlot.startTime} - {timeSlot.endTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeSlotList;
