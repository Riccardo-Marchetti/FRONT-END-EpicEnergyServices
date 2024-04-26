import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
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
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>numero</th>
              <th>p. Iva</th>
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
                    <td>{fattura.pIva}</td>
                    <td>{fattura.data}</td>
                    <td>{fattura.stato}</td>
                    <td>{fattura.importo} €</td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </Table>
      </Container>
    </>
  );
};
export default Fatture;
