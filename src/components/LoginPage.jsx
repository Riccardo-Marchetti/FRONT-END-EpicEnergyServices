import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchLogin = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        localStorage.setItem("token", data.accessToken);
        navigate("/fatture");
        window.location.reload();
      } else {
        throw new Error(`${res.status} - Errore nella fetch`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <>
      <MyNavBar />
      <header className="sfondo-img">
        <Row className="p-0 m-0">
          <Col className="col-img col-12 p-0 d-flex flex-column align-items-end justify-content-center ">
            <div>
              <div className="bg-white form-cont d-flex flex-column justify-content-evenly rounded-5  ">
                <div className="d-flex justify-content-center">
                  <h2 className="text-black ps-3 fw-bold ">Benvenuto!</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <h3>Accedi</h3>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Form onSubmit={handleLogin} className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Accedi
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default LoginPage;
