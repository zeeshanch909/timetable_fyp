import React, { useState } from 'react';

const RoomForm = ({ onSubmit, onCancel, initialData }) => {
  const [room, setRoom] = useState(initialData ? initialData : { roomNumber: '', capacity: '' });

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(room);

    setRoom({
      roomNumber: '',
      capacity: '',
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
      <h2>{initialData ? 'Edit Room' : 'Add Room'}</h2>
      <div>
        <label htmlFor="roomNumber">Room Number:</label>
        <input type="text" id="roomNumber" name="roomNumber" value={room.roomNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="capacity">Capacity:</label>
        <input type="text" id="capacity" name="capacity" value={room.capacity} onChange={handleChange} />
      </div>
      {/* Add more fields and form inputs as per your requirements */}
      <button type="submit">{initialData ? 'Update' : 'Save'}</button>
      {initialData && <button type="button" onClick={handleDelete}>Delete</button>}
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default RoomForm;
