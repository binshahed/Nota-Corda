import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseDetail from "../CourseDetail/CourseDetail";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./my_course_data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="text-warning">Our Courses</h1>
        <h2 className="text-danger">All Musical Courses</h2>
        <p>
          Music has the power of producing a certain effect on the moral
          character of the soul, and if it has the power to do this, it is clear
          that the young must be directed to music and must be educated in it.”
          “Music washes away from the soul the dust of everyday life
        </p>
      </div>
      {/* all courses show */}
      <Row xs={1} md={3} className="g-4">
        {courses.map((course) => (
          <CourseDetail key={course.id} course={course} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;
