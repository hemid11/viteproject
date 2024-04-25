import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Swal from 'sweetalert2';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'JavaScript', description: 'Description of Course 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s' },
    { id: 2, title: 'C#', description: 'Description of Course 2', image: 'https://miro.medium.com/v2/resize:fit:1400/1*_NVBTVdmjt3Qvq3CZOySXg.png' },
    { id: 3, title: 'Nodejs', description: 'Description of Course 3', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' },
  ]);

  const deleteCourse = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this course?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCourses(courses.filter(course => course.id !== id));
        
      }
    });
  };

  return (
    <div className="App">
      <h1>React Course App</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <CourseCard
            image={course.image}
            title={course.title}
            description={course.description}
          />
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
