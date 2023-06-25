import React from 'react';

const RoomList = ({ rooms, onEdit, onDelete }) => {
  const handleEdit = (room) => {
    onEdit(room);
  };

  const handleDelete = (room) => {
    onDelete(room);
  };

  return (
    <div>
      <h2>Room List</h2>
      {rooms.length === 0 ? (
        <p>No rooms available</p>
      ) : (
        <ul>
          {rooms.map((room) => (
            <li key={room._id}>
              <span>{room.name}</span>
              <span>{room.capacity}</span>
              <button type="button" onClick={() => handleEdit(room)}>Edit</button>
              <button type="button" onClick={() => handleDelete(room)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoomList;
