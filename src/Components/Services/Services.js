import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
  const [courses,setCourses ] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
        <h2>Total courses: {courses.length}</h2>
            <div className="row">
                {
                    courses.map(course =><Course 
                      key={course.Title}
                      course={course}
                    ></Course> )
                }
            </div>
            </div>
    );
};

export default Services;