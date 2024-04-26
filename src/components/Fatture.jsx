import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Fatture = () => {
  const [fatture, setFatture] = useState([]);

  const getFatture = async () => {
    try {
      const res = await fetch("http://localhost:3001/fatture", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setFatture(data.content);
      } else {
        throw new Error(`${res.status} - Errore nella fetch`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFatture();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1 className="d-flex justify-content-center my-3">Elenco fatture</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>numero</th>
                <th>data</th>
                <th>stato</th>
                <th>importo</th>
              </tr>
            </thead>
            {fatture.map((fattura) => {
              return (
                <React.Fragment key={fattura.numero}>
                  <tbody key={fattura.numero}>
                    <tr>
                      <td>{fattura.numero}</td>
                      <td>{fattura.data}</td>
                      <td>{fattura.stato.nome}</td>
                      <td>{fattura.importo} €</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
          </Table>
        </Row>
      </Container>
    </>
  );
};
export default Fatture;
