import { Button, Col, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <MyNavBar />
      <Row className="p-0 m-0">
        <Col className="col-img  col-12 p-0 d-flex flex-column align-items-end justify-content-center ">
          <div>
            <div className="bg-white cont-home d-flex flex-column rounded-5  ">
              <div className="d-flex justify-content-center">
                <h2 className="text-black ps-3 fw-bold mt-3">Benvenuto!</h2>
              </div>
              <div className="d-flex justify-content-center mb-3 mt-2">
                <h3>Cosa vuoi fare?</h3>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/accedi" className="navbar-brand p-0 pointer">
                  <Button className="but-home p-0">Accedi</Button>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link
                  to="/registrati"
                  className="navbar-brand p-0 mt-3 pointer"
                >
                  <Button className="but-home p-0">Registrati</Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StartPage;
