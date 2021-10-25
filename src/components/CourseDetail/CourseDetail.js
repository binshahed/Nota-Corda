import { Button, Card, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const CourseDetail = (props) => {
  const {
    id,
    course_name,
    course_price,
    course_instructor,
    course_img,
    course_detail,
    course_duration,
  } = props.course;
  const history = useHistory();
  const handleAdmit = () => {
    history.push(`/course/${id}`);
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={course_img} />
        <Card.Body className="text-center">
          <Card.Text className="h2 text-danger ">{course_name}</Card.Text>
          <Card.Text>
            <span className="fw-bold">Instructor:</span> {course_instructor}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Course Duration:</span> {course_duration}{" "}
            Month
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Course Price: </span>
            {course_price}$
          </Card.Text>
          <Card.Text>{course_detail}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseDetail;
