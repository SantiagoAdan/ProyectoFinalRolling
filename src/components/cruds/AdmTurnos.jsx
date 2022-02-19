import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Turno from "./Turno";

const AdmTurnos = ({ turnos, URLTurnos, getApiTurnos }) => {

  let sortTurnos = turnos;
  sortTurnos.sort((a, b) => {
    const as = a.fecha.split("-");
    const ad = new Date(as[0], as[1] - 1, as[2]);
    const bs = b.fecha.split("-");
    const bd = new Date(bs[0], bs[1] - 1, bs[2]);
    return ad - bd;
  });
  return (
    <div>
      <NavBar></NavBar>

      <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="font-celeste-crud">Administrador de turnos</h1>
            <Link
              to="/Adm/turnos/crear"
              className=" btn-celeste-crud text-decoration-none text-center"
            >
              Agregar Turno
            </Link>
          </div>
          <hr />
          {/* Table of products */}
          { turnos.length!==0 ?
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr className="font-celeste-crud">
                <th>Mascota-Dueño</th>
                <th>Veterinario</th>
                <th>Detalle de cita</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* esto tiene que ir en turno */}
              {sortTurnos.map((turno) => (
                <Turno turno={turno} key={turno.id} URLTurnos={URLTurnos} getApiTurnos={getApiTurnos}></Turno>
              ))}
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">            
            <h1>🐶🐱 No hay turnos registrados 🐱🐶</h1>
          </div>
          }
        </Container>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AdmTurnos;
