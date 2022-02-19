import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import {
  validateTexto,
  validateEmail,
  validateTelefono,
} from "../Validaciones";

const EditPacientes = ({ URLPacientes, getApiPacientes }) => {
  //state
  const [paciente, setPaciente] = useState({});
  //parametro
  const { id } = useParams();
  //efect
  useEffect(async () => {
    try {
      const res = await fetch(`${URLPacientes}/${id}`);
      const pacienteApi = await res.json();
      setPaciente(pacienteApi);
    } catch (error) {
      console.log(error);
    }
  }, []);
  //referencias
  const nombreDueñoRef = useRef("");
  const apellidoDueñoRef = useRef("");
  const emailRef = useRef("");
  const telefonoRef = useRef("");
  const nombreMascRef = useRef("");
  const especieMascRef = useRef("");
  const razaMascRef = useRef("");
  //navigate
  const navigate = useNavigate();
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (
      !validateTexto(nombreDueñoRef.current.value) ||
      !validateTexto(apellidoDueñoRef.current.value) ||
      !validateEmail(emailRef.current.value) ||
      !validateTelefono(telefonoRef.current.value) ||
      !validateTexto(nombreMascRef.current.value) ||
      !validateTexto(especieMascRef.current.value) ||
      !validateTexto(razaMascRef.current.value)
    ) {
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
      return;
    } else {
      const pacienteUpdate = {
        nombreDueño: nombreDueñoRef.current.value,
        apellidoDueño: apellidoDueñoRef.current.value,
        email: emailRef.current.value,
        telefono: telefonoRef.current.value,
        nombreMascota: nombreMascRef.current.value,
        especieMascota: especieMascRef.current.value,
        razaMascota: razaMascRef.current.value,
      };
      
      Swal.fire({
        title: "Estas seguro?",
        text: "No puedes revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Actualizar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(`${URLPacientes}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(pacienteUpdate),
            });
            if (res.status === 200) {
              Swal.fire("Actualizado!", "Los datos fueron actualizados.", "success");
              getApiPacientes();
              navigate("/Adm/pacientes");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1 className="font-celeste-crud">Editar Paciente</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <h2 className="text-center font-celeste-crud">Informacion</h2>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Dueño</h3>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="font-celeste-crud">Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rolling"
                  defaultValue={paciente.nombreDueño}
                  ref={nombreDueñoRef}                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className="font-celeste-crud">Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Veterinaria"
                  defaultValue={paciente.apellidoDueño}
                  ref={apellidoDueñoRef}                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-celeste-crud">Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="rollingvet@rollingvet.com.ar"
                  defaultValue={paciente.email}
                  ref={emailRef}                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="font-celeste-crud">Telefono*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="3816000000"
                  defaultValue={paciente.telefono}
                  ref={telefonoRef}                  
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="text-center font-celeste-crud">Mascota</h3>

              <Form.Group className="mb-3" controlId="formBasicNameMasc">
                <Form.Label className="font-celeste-crud">Nombre Mascota*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mascota"
                  defaultValue={paciente.nombreMascota}
                  ref={nombreMascRef}                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEspecie">
                <Form.Label className="font-celeste-crud">Especie*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Especie"
                  defaultValue={paciente.especieMascota}
                  ref={especieMascRef}                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaza">
                <Form.Label className="font-celeste-crud">Raza*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Raza"
                  defaultValue={paciente.razaMascota}
                  ref={razaMascRef}                  
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-end">
            <button className="btn-celeste-crud">Guardar</button>
          </div>
        </Form>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default EditPacientes;
