import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourse";
import AboutUs from "../AboutUS/AboutUs";
import CourseDetail from "../CourseDetail/CourseDetail";
import Footer from "../Footer/Footer";
import OurTeams from "../OurTeams/OurTeams";

import Slider from "../Slider/Slider";

const Home = () => {
  const [courses, setCourses] = useCourses([]);
  const first10 = courses.slice(0, 5);
  let displayCourse = [];

  return (
    <div>
      {/* slider component */}
      <Slider />
      {/* course Aria */}
      <div className="container">
        <div className="text-center py-5">
          <h1 className="text-warning">Our Courses</h1>
          <h2 className="text-danger">Most Popular Courses</h2>
          <p>
            Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
            ligula.
            <br /> Pellentesque mattis mauris ac tortor volutpat, eu fermentum
            sapien euismod. In id tempus metus. Donec eu volutpat nibh, in
            maximus ligula. In id tempus metus. <br /> Pellentesque mattis
            mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus
            metus. Donec eu volutpat nibh, in maximus ligula.
          </p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {first10.map((course) => (
            <CourseDetail course={course} />
          ))}

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
      <OurTeams />
      <AboutUs />
    </div>
  );
};

export default Home;
