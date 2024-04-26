import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Clienti = () => {
  const [clienti, setClienti] = useState([]);

  const getFatture = async () => {
    try {
      const res = await fetch("http://localhost:3001/clienti", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setClienti(data.content);
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
          <h1 className="d-flex justify-content-center my-3">Elenco clienti</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>p. Iva</th>
                <th>nome</th>
                <th>cognome</th>
                <th>email contatto</th>
                <th>telefono contatto</th>
                <th>pec</th>
                <th>ragione sociale</th>
                <th>sede legale</th>
                <th>sede operativa</th>
              </tr>
            </thead>
            {clienti.map((cliente) => {
              return (
                <React.Fragment key={cliente.partitaIva}>
                  <tbody>
                    <tr>
                      <td>{cliente.partitaIva}</td>
                      <td>{cliente.nomeContatto}</td>
                      <td>{cliente.cognomeContatto}</td>
                      <td>{cliente.emailContatto}</td>
                      <td>{cliente.telefonoContatto} </td>
                      <td>{cliente.pec} </td>
                      <td>{cliente.ragioneSociale} </td>
                      <td>{cliente.sedeLegale} </td>
                      <td>{cliente.sedeOperativa} </td>
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
export default Clienti;
