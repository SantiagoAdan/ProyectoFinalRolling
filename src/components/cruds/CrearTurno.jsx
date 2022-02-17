import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { validateTextoEsp} from "../Validaciones";
//datepickery
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const CrearTurno = ({ pacientes, URLTurnos, getApiTurnos }) => {
  const [detalleCita, setDetalleCita] = useState("");
  const [veterinario, setVeterinario] = useState("");
  const [mascota, setMascota] = useState("");
  //const [fecha, setFecha] = useState("");
  //const [hora, setHora] = useState("");
  //manejo de FH  
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );
  //fin FH

  const navigate = useNavigate();

  //handle date
  const handleDate=(date)=>{
    setStartDate(date);    
  }

  //fin handle date

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateTextoEsp(detalleCita) ||
      !validateTextoEsp(veterinario) ||
      !validateTextoEsp(mascota) 
    ) {
      Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
      return;
    } else {
      const newTurno = {
        detalleCita,
        veterinario,
        mascota,
        startDate
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
            const res = await fetch(URLTurnos, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newTurno),
            });
            if (res.status === 201) {
              Swal.fire("Creado!", "El turno fue creado.", "OK");
              getApiTurnos();
              navigate("/Adm/turnos");
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
        <h1 className="font-celeste-crud">Agregar Turno</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicMascota">
            <Form.Label className="font-celeste-crud">Mascota*</Form.Label>
            <Form.Select
              onChange={({ target }) => {
                setMascota(target.value.trimStart());
              }}
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
            <Form.Label className="font-celeste-crud">Veterinario*</Form.Label>
            <Form.Select
              onChange={({ target }) => {
                setVeterinario(target.value.trimStart());
              }}
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
            <Form.Label className="font-celeste-crud">
              Detalle de Cita*
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Mascota"
              style={{ height: "100px" }}
              onChange={({ target }) => {
                setDetalleCita(target.value.trimStart());
              }}
            ></Form.Control>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicFecha">
            <Form.Label className="font-celeste-crud">
              Fecha (Lun a Vie)*
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="21/02/2022"
              onChange={({ target }) => {
                setFecha(target.value.trimStart());
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHora">
            <Form.Label className="font-celeste-crud">
              Hora (08 a 17)*
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="08:00"              
              onChange={({ target }) => {
                setHora(target.value.trimStart());
              }}
            ></Form.Control>
          </Form.Group> */}
                {/* copiado */}
          <Form.Group>
            <Form.Label className="font-celeste-crud">Seleccione fecha y hora</Form.Label>
            
            <DatePicker
              locale={es}
              selected={startDate}
              onChange={(date) =>{handleDate(date)}}
              minDate={new Date()}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              showTimeSelect
              filterTime={(date) =>
                (date.getHours() >= 8 && date.getHours() <= 12)||(date.getHours() >= 14 && date.getHours() <= 18)
              }
              excludeTimes={[setHours(setMinutes(new Date(),30),12)]}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 0), 18)}
              dateFormat="Pp"
              className="container-fluid form form-control mb-3"
            ></DatePicker>
            
          </Form.Group>
          {/* fin copiado */}

          <div className="text-end">
            <button className="btn-celeste-crud">Guardar</button>
          </div>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CrearTurno;
