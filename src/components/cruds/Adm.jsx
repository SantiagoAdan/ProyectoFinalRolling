import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTurnos from "./CardTurnos";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useState } from "react";
import { useEffect } from "react";

const Adm = ({ turnos }) => {
  //Ordeno el array en funcion a la fechas
  let sortTurnos = turnos;
  sortTurnos.sort((a, b) => {
    const as = a.fecha.split("-");
    const ad = new Date(as[0], as[1] - 1, as[2]);
    const bs = b.fecha.split("-");
    const bd = new Date(bs[0], bs[1] - 1, bs[2]);
    return ad - bd;
  });
  //Fin orden array

  

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="text-center my-3 font-celeste-crud">ADMINISTRACION</h1>
        <h3 className="text-center font-celeste-crud">¡Bienvenido!</h3>
        <h5 className="text-end fs-6">RollingVet V:1-0-0</h5>
        <hr/>
        <div className="d-flex justify-content-around">
          <Link
            to="/Adm/pacientes"
            className="btn-celeste-crud text-decoration-none"
          >
            Administrar Pacientes
          </Link>
          <Link to="/Adm/turnos" className="btn-celeste-crud text-decoration-none">
            Administrar Turnos
          </Link>
        </div>
        <hr />
        <h2 className="text-center bg-celeste-crud text-white">Turnos Asignados</h2>
        <hr className="container" />
        {turnos.length !== 0 ? (
          <Row>
            {sortTurnos.map((turno) => (
              <Col xl={3} lg={4} md={6} xs={12} key={turno.id}>
                <CardTurnos turno={turno}></CardTurnos>
                
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🐶🐱 No hay turnos asignados 🐱🐶</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Adm;
