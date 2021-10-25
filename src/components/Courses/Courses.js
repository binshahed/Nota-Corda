import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import CourseDetail from "../CourseDetail/CourseDetail";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course_data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="text-warning">Our Courses</h1>
        <h2 className="text-danger">Most Popular Courses</h2>
        <p>
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
          ligula.
          <br /> Pellentesque mattis mauris ac tortor volutpat, eu fermentum
          sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
          ligula. In id tempus metus. <br /> Pellentesque mattis mauris ac
          tortor volutpat, eu fermentum sapien euismod. In id tempus metus.
          Donec eu volutpat nibh, in maximus ligula.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4">
        {courses.map((course) => (
          <CourseDetail key={course.id} course={course} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;
