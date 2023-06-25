// import React from 'react';

// const SubjectList = () => {
//   // Fetch the list of subjects from your application state or API
//   const subjects = [];

//   return (
//     <div>
//       <h2>Subject List</h2>
//       {subjects.length === 0 ? (
//         <p>No subjects available</p>
//       ) : (
//         <ul>
//           {subjects.map((subject) => (
//             <li key={subject.id}>{subject.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SubjectList;


import React from 'react';

const SubjectList = ({ subjects, onEdit, onDelete }) => {
  const handleEdit = (subject) => {
    onEdit(subject);
  };

  const handleDelete = (subject) => {
    onDelete(subject);
  };

  return (
    <div>
      <h2>Subject List</h2>
      {subjects.length === 0 ? (
        <p>No subjects available</p>
      ) : (
        <ul>
          {subjects.map((subject) => (
            <li key={subject._id}>
              <span>{subject.name}</span>
              <span>{subject.code}</span>
              <button type="button" onClick={() => handleEdit(subject)}>Edit</button>
              <button type="button" onClick={() => handleDelete(subject)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubjectList;
