import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/nota_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="" />
            </Navbar.Brand>
          </Link>

          <Nav className="me-left">
            <Link to="/home">Home</Link>

            <Link to="/courses">Courses</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/about">About Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
