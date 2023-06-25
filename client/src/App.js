import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import SubjectPage from './pages/SubjectPage';
import RoomPage from './pages/RoomPage';
import TimeSlotPage from './pages/TimeSlotPage';
import SchedulePage from './pages/SchedulePage';




const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TeacherPage />} />
          <Route path="/subjects" element={<SubjectPage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/timeslots" element={<TimeSlotPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
