import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomList from '../components/RoomList';
import RoomForm from '../components/RoomForm';

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/rooms');
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddRoom = async (room) => {
    try {
      const response = await axios.post('http://localhost:8000/api/rooms', room);
      setRooms([...rooms, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateRoom = async (room) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/rooms/${room._id}`, room);
      setRooms((prevRooms) =>
        prevRooms.map((r) => (r._id === room._id ? response.data : r))
      );
      setEditingRoom(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRoom = async (room) => {
    try {
      await axios.delete(`http://localhost:8000/api/rooms/${room._id}`);
      setRooms(rooms.filter((r) => r._id !== room._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
  };

  const handleCancelEdit = () => {
    setEditingRoom(null);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Room Management</h2>
      <RoomForm
        onSubmit={editingRoom ? handleUpdateRoom : handleAddRoom}
        onCancel={handleCancelEdit}
        initialData={editingRoom}
      />
      <RoomList rooms={rooms} onEdit={handleEditRoom} onDelete={handleDeleteRoom} />
    </div>
  );
};

export default RoomPage;
