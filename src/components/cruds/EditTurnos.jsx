import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { validateTextoEsp, validateFecha, validateHora } from "../Validaciones";

const EditTurnos = ({ URLTurnos, getApiTurnos, pacientes}) => {

  return (
    <div>
      <NavBar></NavBar>

      <Container className="py-5">
        <h1>Editar Turno</h1>
        <hr />
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Select
            //   onChange={({ target }) => {
            //     setMascota(target.value.trimStart());
            //   }}
            >
              <option value="">Selecciona una mascota</option>
              {pacientes.map((paciente) => (
                <option
                  value={`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
                  key={paciente.id}
                >{`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicVet">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Select
            //   onChange={({ target }) => {
            //     setVeterinario(target.value.trimStart());
            //   }}
            >
              <option value="">Selecciona un Veterinario</option>
              <option value="Addle Romina">Dra. Addle Romina A.</option>
              <option value="Fernandez Sara">Dra. Fernandez Sara V.</option>
              <option value="Molinari Pablo">Dr. Molinari Pablo D.</option>
              <option value="Kuc Damian">Dr. Kuc Damian</option>
              <option value="Mezar Diego">Dr. Mezar Diego</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label>Detalle de Cita*</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Mascota"
              style={{ height: "100px" }}
            //   onChange={({ target }) => {
            //     setDetalleCita(target.value.trimStart());
            //   }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFecha">
            <Form.Label>Fecha (Lun a Vie)*</Form.Label>
            <Form.Control
              type="date"
              placeholder="21/02/2022"
            //   onChange={({ target }) => {
            //     setFecha(target.value.trimStart());
            //   }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHora">
            <Form.Label>Hora (08 a 17)*</Form.Label>
            <Form.Control
              type="time"
              placeholder="08:00"
            //   onChange={({ target }) => {
            //     setHora(target.value.trimStart());
            //   }}
            ></Form.Control>
          </Form.Group>

          <div className="text-end">
            <button className="btn btn-dark">Guardar</button>
          </div>
        </Form>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default EditTurnos;
