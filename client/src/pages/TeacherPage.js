import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherList from '../components/TeacherList';
import TeacherForm from '../components/TeacherForm';

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTeacher = async (teacher) => {
    console.log(teacher);
    try {
      const response = await axios.post('http://localhost:8000/api/teachers', teacher);
      setTeachers([...teachers, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTeacher = async (teacher) => {
    console.log(teacher)
    try {
      const response = await axios.put(`http://localhost:8000/api/teachers/${teacher._id}`, teacher);
      setTeachers((prevTeachers) =>
      prevTeachers.map((t) => (t._id === teacher._id ? response.data : t))
      );
      setEditingTeacher(null);
    } catch (error) {
      console.log(error);
    }
  };
  
        
        const handleDeleteTeacher = async (teacher) => {
          try {
            await axios.delete(`http://localhost:8000/api/teachers/${teacher._id}`);
            setTeachers(teachers.filter((t) => t._id !== teacher._id));
          } catch (error) {
            console.log(error);
          }
        };
        
        const handleEditTeacher = (teacher) => {
        setEditingTeacher(teacher);
        };
        
        const handleCancelEdit = () => {
        setEditingTeacher(null);
        };
        
        return (
        <div>
        <h2>Teacher Management</h2>
        <TeacherForm
        onSubmit={editingTeacher ? handleUpdateTeacher : handleAddTeacher}
        onCancel={handleCancelEdit}
        initialData={editingTeacher}
        />

        <TeacherList
             teachers={teachers}
             onEdit={handleEditTeacher}
             onDelete={handleDeleteTeacher}
           />
        
        </div>
        );
        };
        
        export default TeacherPage;
