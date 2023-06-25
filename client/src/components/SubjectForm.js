// // // components/SubjectForm.js

// // import React, { useState } from 'react';
// // import { validateSubjectSchedule } from '../utils/scheduleUtils';

// // const SubjectForm = () => {
// //   const [schedule, setSchedule] = useState([]);

// //   const [subject, setSubject] = useState({
// //     name: '',
// //     // Add more fields as per your requirements
// //   });

// //   const handleChange = (e) => {
// //     setSubject({
// //       ...subject,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Validate subject schedule
// //     const isConflict = validateSubjectSchedule(schedule, newScheduleData);

// //     if (isConflict) {
// //       // Handle conflict scenario (e.g., display an error message, prevent saving)
// //       console.log('Schedule conflict detected. Please choose a different time slot.');
// //       return;
// //     }

// //     // Save the data or update the schedule
// //     // ...
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Add Subject</h2>
// //       <div>
// //         <label htmlFor="name">Name:</label>
// //         <input type="text" id="name" name="name" value={subject.name} onChange={handleChange} />
// //       </div>
// //       {/* Add more fields and form inputs as per your requirements */}
// //       <button type="submit">Save</button>
// //     </form>
// //   );
// // };

// // export default SubjectForm;




// import React, { useState } from 'react';

// const SubjectForm = ({ onSubmit, onCancel, initialData }) => {
//   const [subject, setSubject] = useState(initialData);

//   const handleChange = (e) => {
//     setSubject({
//       ...subject,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     onSubmit(subject);

//     setSubject({
//       name: '',
//       // Reset other form fields as per your requirements
//     });
//   };

//   const handleCancel = () => {
//     onCancel();
//   };

//   const handleDelete = () => {
//     // Handle delete operation
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{initialData ? 'Edit Subject' : 'Add Subject'}</h2>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={subject.name} onChange={handleChange} />
//       </div>
//       {/* Add more fields and form inputs as per your requirements */}
//       <button type="submit">{initialData ? 'Update' : 'Save'}</button>
//       {initialData && <button type="button" onClick={handleDelete}>Delete</button>}
//       <button type="button" onClick={handleCancel}>Cancel</button>
//     </form>
//   );
// };

// export default SubjectForm;

import React, { useState } from 'react';

const SubjectForm = ({ onSubmit, onCancel, initialData }) => {
  const [subject, setSubject] = useState(initialData ? initialData : { name: '', code: '' });

  const handleChange = (e) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(subject);

    setSubject({
      name: '',
      code: '',
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
      <h2>{initialData ? 'Edit Subject' : 'Add Subject'}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={subject.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="code">Code:</label>
        <input type="text" id="code" name="code" value={subject.code} onChange={handleChange} />
      </div>
      {/* Add more fields and form inputs as per your requirements */}
      <button type="submit">{initialData ? 'Update' : 'Save'}</button>
      {initialData && <button type="button" onClick={handleDelete}>Delete</button>}
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default SubjectForm;
