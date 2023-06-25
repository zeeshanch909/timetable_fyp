import React, { useState } from 'react';
import TeacherList from '../components/TeacherList';
import TeacherForm from '../components/TeacherForm';
import SubjectList from '../components/SubjectList';
import SubjectForm from '../components/SubjectForm';
import RoomList from '../components/RoomList';
import RoomForm from '../components/RoomForm';
import TimeSlotList from '../components/TimeSlotList';
import TimeSlotForm from '../components/TimeSlotForm';

const SchedulePage = () => {
  // Teacher state
  const [teachers, setTeachers] = useState([]);

  const handleAddTeacher = (teacher) => {
    // Add teacher to the teachers array
    setTeachers([...teachers, teacher]);
  };

  const handleEditTeacher = (teacher) => {
    // Update the edited teacher in the teachers array
    const updatedTeachers = teachers.map((t) =>
      t.id === teacher.id ? teacher : t
    );
    setTeachers(updatedTeachers);
  };

  const handleDeleteTeacher = (teacher) => {
    // Remove the deleted teacher from the teachers array
    const updatedTeachers = teachers.filter((t) => t.id !== teacher.id);
    setTeachers(updatedTeachers);
  };

  // Subject state
  const [subjects, setSubjects] = useState([]);

  const handleAddSubject = (subject) => {
    // Add subject to the subjects array
    setSubjects([...subjects, subject]);
  };

  const handleEditSubject = (subject) => {
    // Update the edited subject in the subjects array
    const updatedSubjects = subjects.map((s) =>
      s.id === subject.id ? subject : s
    );
    setSubjects(updatedSubjects);
  };

  const handleDeleteSubject = (subject) => {
    // Remove the deleted subject from the subjects array
    const updatedSubjects = subjects.filter((s) => s.id !== subject.id);
    setSubjects(updatedSubjects);
  };

  // Room state
  const [rooms, setRooms] = useState([]);

  const handleAddRoom = (room) => {
    // Add room to the rooms array
    setRooms([...rooms, room]);
  };

  const handleEditRoom = (room) => {
    // Update the edited room in the rooms array
    const updatedRooms = rooms.map((r) => (r.id === room.id ? room : r));
    setRooms(updatedRooms);
  };

  const handleDeleteRoom = (room) => {
    // Remove the deleted room from the rooms array
    const updatedRooms = rooms.filter((r) => r.id !== room.id);
    setRooms(updatedRooms);
  };

  // Time Slot state
  const [timeSlots, setTimeSlots] = useState([]);

  const handleAddTimeSlot = (timeSlot) => {
    // Add time slot to the timeSlots array
    setTimeSlots([...timeSlots, timeSlot]);
  };

  const handleEditTimeSlot = (timeSlot) => {
    // Update the edited time slot in the timeSlots array
    const updatedTimeSlots = timeSlots.map((ts) =>
      ts.id === timeSlot.id ? timeSlot : ts
    );
    setTimeSlots(updatedTimeSlots);
  };

  const handleDeleteTimeSlot = (timeSlot) => {
    // Remove the deleted time slot from the timeSlots array
    const updatedTimeSlots = timeSlots.filter((ts) => ts.id !== timeSlot.id);
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <div>
      <h2>Schedule Management</h2>
      <h3>Teachers</h3>
      <TeacherList
      teachers={teachers}
      onEditTeacher={handleEditTeacher}
      onDeleteTeacher={handleDeleteTeacher}
    />
    <TeacherForm onAddTeacher={handleAddTeacher} />
  
    <h3>Subjects</h3>
    <SubjectList
      subjects={subjects}
      onEditSubject={handleEditSubject}
      onDeleteSubject={handleDeleteSubject}
    />
    <SubjectForm onAddSubject={handleAddSubject} />
  
    <h3>Rooms</h3>
    <RoomList
      rooms={rooms}
      onEditRoom={handleEditRoom}
      onDeleteRoom={handleDeleteRoom}
    />
    <RoomForm onAddRoom={handleAddRoom} />
  
    <h3>Time Slots</h3>
    <TimeSlotList
      timeSlots={timeSlots}
      onEditTimeSlot={handleEditTimeSlot}
      onDeleteTimeSlot={handleDeleteTimeSlot}
    />
    <TimeSlotForm onAddTimeSlot={handleAddTimeSlot} />
  </div>
);
};

export default SchedulePage;
