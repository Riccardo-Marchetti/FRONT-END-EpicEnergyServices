import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/OIG1.jpg";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black px-4">
        <Container fluid className="">
          <Navbar.Brand href="#">
            <img
              className="text-white"
              src={logo}
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              alt="LOGO"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="navbar-brand pe-2 text-white">
                Home
              </Link>

              <Link to="/fatture" className="navbar-brand pe-2 text-white">
                Fatture
              </Link>

              <Link to="" className="navbar-brand pe-2 text-white">
                Contatti
              </Link>
            </Nav>

            <div className="d-flex align-items-center ">
              <Button className="rounded-circle ms-3 p-0  button-login d-flex align-items-center bg-transparent    border-0">
                <img
                  className=" rounded-circle  "
                  src="https://ui-avatars.com/api/?name=Francesco+Andrisani"
                  style={{ width: "45px", height: "45px" }}
                  alt="LOGO"
                />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavBar;
