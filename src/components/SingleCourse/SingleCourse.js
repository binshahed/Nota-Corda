import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleCourse = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course_data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div>
      <h1>This is Single Course</h1>
    </div>
  );
};

export default SingleCourse;
