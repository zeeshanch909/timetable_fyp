import React, { useState } from 'react';

const TeacherForm = ({ onSubmit, onCancel, initialData }) => {
  const [teacher, setTeacher] = useState(initialData ? initialData : { name: '', email: '' });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(teacher);

    setTeacher({
      name: '',
      email: '',
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleDelete = () => {
    // Handle delete operation
  };
  const handleedit=(id)=>{
    console.log(id + "usama")

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Teacher' : 'Add Teacher'}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={teacher.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={teacher.email} onChange={handleChange} />
      </div>
      {/* Add more fields and form inputs as per your requirements */}
      <button type="submit"  >{initialData ? 'Update' : 'Save'}</button>
      {initialData && <button type="button" onClick={handleDelete}>Delete</button>}
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default TeacherForm;
// ..............................................................



