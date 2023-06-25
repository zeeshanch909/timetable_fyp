import React, { useState } from 'react';
import TimeSlotList from '../components/TimeSlotList';
import TimeSlotForm from '../components/TimeSlotForm';

const TimeSlotPage = () => {
  const [timeSlots, setTimeSlots] = useState([]);

  const handleAddTimeSlot = (timeSlot) => {
    // Add a new time slot
    setTimeSlots([...timeSlots, timeSlot]);
  };

  const handleEditTimeSlot = (updatedTimeSlot) => {
    // Find the index of the time slot to be edited
    const index = timeSlots.findIndex((timeSlot) => timeSlot.id === updatedTimeSlot.id);

    if (index !== -1) {
      // Update the time slot at the found index
      const updatedTimeSlots = [...timeSlots];
      updatedTimeSlots[index] = updatedTimeSlot;
      setTimeSlots(updatedTimeSlots);
    }
  };

  const handleDeleteTimeSlot = (timeSlot) => {
    // Filter out the time slot to be deleted
    const updatedTimeSlots = timeSlots.filter((slot) => slot.id !== timeSlot.id);
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <div>
      <h2>Time Slot Management</h2>
      <TimeSlotList timeSlots={timeSlots} onEdit={handleEditTimeSlot} onDelete={handleDeleteTimeSlot} />
      <TimeSlotForm onSubmit={handleAddTimeSlot} />
    </div>
  );
};

export default TimeSlotPage;
