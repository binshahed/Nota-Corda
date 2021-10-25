import React from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourse";
import AboutUs from "../AboutUS/AboutUs";
import CourseDetail from "../CourseDetail/CourseDetail";

import OurTeams from "../OurTeams/OurTeams";

import Slider from "../Slider/Slider";

const Home = () => {
  // load data from my custom hooks
  const [courses, setCourses] = useCourses([]);
  const first10 = courses.slice(0, 5);

  return (
    <div>
      {/* slider component */}
      <Slider />
      {/* course Aria start*/}
      <div className="container">
        <div className="text-center py-5">
          {/* courses heading */}
          <h1 className="text-warning">Our Courses</h1>
          <h2 className="text-danger">Most Popular Courses</h2>
          <p>
            Music has the power of producing a certain effect on the moral
            character of the soul, and if it has the power to do this, it is
            clear that the young must be directed to music and must be educated
            in it.” “Music washes away from the soul the dust of everyday life
          </p>
        </div>
        {/* five courses show */}
        <Row xs={1} md={3} className="g-4">
          {first10.map((course) => (
            <CourseDetail key={course.id} course={course} />
          ))}

          {/* big button see all courses */}
          <Button className="pe-none" variant="danger">
            <h2>
              <Link
                className="text-light text-decoration-none pe-auto "
                to="/courses"
              >
                See All <br /> Courses
              </Link>
            </h2>
          </Button>
        </Row>
        {/* courses area end */}
      </div>
      {/* our team */}
      <OurTeams />
      {/* about us */}
      <AboutUs />
    </div>
  );
};

export default Home;
