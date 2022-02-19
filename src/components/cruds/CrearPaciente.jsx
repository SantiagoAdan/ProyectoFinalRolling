import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Swal from "sweetalert2";
import {validateTexto, validateEmail, validateTelefono} from "../Validaciones";
import { useNavigate } from "react-router-dom";


const CrearPaciente = ({URLPacientes, getApiPacientes}) => {
  
  const [nombreDueño, setNombreDueño]=useState('');
  const [apellidoDueño, setApellidoDueño]=useState('');
  const [email, setEmail]=useState('');
  const [telefono, setTelefono]=useState('');
  const [nombreMascota, setNombreMascota]=useState('');
  const [especieMascota, setEspecieMascota]=useState('');
  const [razaMascota, setRazaMascota]=useState('');
  
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    
    e.preventDefault();
    if(!validateTexto(nombreDueño)||!validateTexto(apellidoDueño)||!validateEmail(email)||!validateTelefono(telefono)||!validateTexto(nombreMascota)||!validateTexto(especieMascota)||!validateTexto(razaMascota)){
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
      return;
    }else{
      const newPaciente={
        nombreDueño, apellidoDueño, email, telefono, nombreMascota, especieMascota, razaMascota
      };
      
      Swal.fire({
        title: "Estas Seguro?",
        text: "No puedes revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Guardar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(URLPacientes, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newPaciente),
            });
            if (res.status === 201) {
              Swal.fire("Creado!", "El paciente fue creado.", "success");
              getApiPacientes();
              navigate("/Adm/pacientes");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    };
    }
  return (
    <div>
      <NavBar></NavBar>
      <Container className="py-5">
        <h1 className="font-celeste-crud">Crear Paciente</h1>
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
                    onChange={({ target }) => setNombreDueño(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className="font-celeste-crud">Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Veterinaria"
                  onChange={({ target }) => setApellidoDueño(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-celeste-crud">Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="rollingvet@rollingvet.com.ar"
                  onChange={({ target }) => setEmail(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="font-celeste-crud">Telefono*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="3816000000"
                  onChange={({ target }) => setTelefono(target.value.trimStart())}
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
                  onChange={({ target }) => setNombreMascota(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEspecie">
                <Form.Label className="font-celeste-crud">Especie*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Especie"
                  onChange={({ target }) => setEspecieMascota(target.value.trimStart())}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRaza">
                <Form.Label className="font-celeste-crud">Raza*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Raza"
                  onChange={({ target }) => setRazaMascota(target.value.trimStart())}
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

export default CrearPaciente;
