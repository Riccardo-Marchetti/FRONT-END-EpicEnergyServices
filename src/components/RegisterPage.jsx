import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  const fetchRegister = async () => {
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username, name, surname }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        navigate("/accedi");
      } else {
        throw new Error(`${res.status} - Errore nella fetch`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    fetchRegister();
  };

  return (
    <>
      <MyNavBar />
      <Row className="p-0 m-0">
        <Col className="col-img  col-12 p-0 d-flex flex-column align-items-end justify-content-center ">
          <div>
            <div className="bg-white form-reg-cont d-flex flex-column justify-content-evenly rounded-5  ">
              <div className="d-flex justify-content-center">
                <h2 className="text-black ps-3 fw-bold ">Benvenuto!</h2>
              </div>
              <div className="d-flex justify-content-center">
                <h3>Registrati</h3>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Form onSubmit={handleRegister} className="form">
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo cognome"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </Form.Group>

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
                    Register
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
