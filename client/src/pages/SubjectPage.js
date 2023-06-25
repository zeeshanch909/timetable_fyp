// import React, { useState } from 'react';
// import SubjectList from '../components/SubjectList';
// import SubjectForm from '../components/SubjectForm';

// const SubjectPage = () => {
//   const [subjects, setSubjects] = useState([]);

//   const handleAddSubject = (subject) => {
//     // Logic to add a new subject
//     // Update the state or perform any other necessary operations
//   };

//   const handleEditSubject = (subject) => {
//     // Logic to edit a subject
//     // Update the state or perform any other necessary operations
//   };

//   const handleDeleteSubject = (subject) => {
//     // Logic to delete a subject
//     // Update the state or perform any other necessary operations
//   };

//   return (
//     <div>
//       <h2>Subject Management</h2>
//       <SubjectList subjects={subjects} onEdit={handleEditSubject} onDelete={handleDeleteSubject} />
//       <SubjectForm onSubmit={handleAddSubject} />
//     </div>
//   );
// };

// export default SubjectPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectList from '../components/SubjectList';
import SubjectForm from '../components/SubjectForm';

const SubjectPage = () => {
  const [subjects, setSubjects] = useState([]);
  const [editingSubject, setEditingSubject] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/subjects');
      setSubjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddSubject = async (subject) => {
    try {
      const response = await axios.post('http://localhost:8000/api/subjects', subject);
      setSubjects([...subjects, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSubject = async (subject) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/subjects/${subject._id}`, subject);
      setSubjects((prevSubjects) =>
        prevSubjects.map((s) => (s._id === subject._id ? response.data : s))
      );
      setEditingSubject(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSubject = async (subject) => {
    try {
      await axios.delete(`http://localhost:8000/api/subjects/${subject._id}`);
      setSubjects(subjects.filter((s) => s._id !== subject._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubject = (subject) => {
    setEditingSubject(subject);
  };

  const handleCancelEdit = () => {
    setEditingSubject(null);
  };

  return (
    <div>
      <h2>Subject Management</h2>
      <SubjectForm
        onSubmit={editingSubject ? handleUpdateSubject : handleAddSubject}
        onCancel={handleCancelEdit}
        initialData={editingSubject}
      />

      <SubjectList
        subjects={subjects}
        onEdit={handleEditSubject}
        onDelete={handleDeleteSubject}
      />
    </div>
  );
};

export default SubjectPage;

