import React from 'react';

const TeacherList = ({ teachers, onEdit, onDelete }) => {
  const handleEdit = (teacher) => {
    console.log(teacher)
    onEdit(teacher);
  };

  const handleDelete = (teacher) => {
    onDelete(teacher);
  };

  return (
    <div>
      <h2>Teacher List</h2>
      {teachers.length === 0 ? (
        <p>No teachers available</p>
      ) : (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              <span>{teacher.name}</span>
              <button type="button" onClick={() => handleEdit(teacher)}>Edit</button>
              <button type="button" onClick={() => handleDelete(teacher)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherList;
