import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { validateTextoEsp} from "../Validaciones";
//datepickery
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes } from "date-fns";

const EditTurnos = ({ URLTurnos, getApiTurnos, pacientes}) => {
  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;
  if (!session) {
    redirect("/");
  }
    //state
    const [turno, setTurno]=useState({});    
    const [data, setData]=useState('');    
    //parametro
    const {id}=useParams();
    //efect
    useEffect(async()=>{
        try {
            const res=await fetch(`${URLTurnos}/${id}`);
            const turnoApi=await res.json();
            setTurno(turnoApi);
            setData(new Date(turnoApi.startDate));   
        } catch (error) {
            console.log(error);
        }
    }, []);
    //manejo de startDate
    
    
    //referencias    
    const detalleCitaRef=useRef('');       
    //navigate
    const navigate=useNavigate();
    //handle date
  const handleDate=(date)=>{
        setData(date);        
  }
    //handleSubmit
    const handleSubmit=(e)=>{      
        e.preventDefault();                
        if(!validateTextoEsp(turno.mascota)||!validateTextoEsp(turno.veterinario)||!validateTextoEsp(detalleCitaRef.current.value.trimStart())){
            Swal.fire("Ops!", "Algunos de los campos es incorrectos", "Error");
            return;
        }else{

            const turnoUpdate={
                detalleCita: detalleCitaRef.current.value,
                veterinario: turno.veterinario,
                mascota: turno.mascota,
                startDate: data.toString()
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
                    const res = await fetch(`${URLTurnos}/${id}`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(turnoUpdate),
                    });
                    if (res.status === 200) {
                      Swal.fire("Actualizado!", "Los datos fueron actualizados.", "success");
                      getApiTurnos();
                      navigate("/Adm/turnos");
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
              });
        }
    }
  return (
    <div>
      <NavBar></NavBar>

      <Container className="py-5">
        <h1 className="font-celeste-crud">Editar Turno</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicMascota">
            <Form.Label className="font-celeste-crud">Mascota*</Form.Label>
            <Form.Select
            value={turno.mascota}
               onChange={({ target }) => {
                 setTurno({...turno, mascota: target.value});
               }}
               
            >              
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
            value={turno.veterinario}
               onChange={({ target }) => {
                 setTurno({...turno, veterinario: target.value});
               }}
            >             
              <option value="Addle Romina">Dra. Addle Romina A.</option>
              <option value="Fernandez Sara">Dra. Fernandez Sara V.</option>
              <option value="Molinari Pablo">Dr. Molinari Pablo D.</option>
              <option value="Kuc Damian">Dr. Kuc Damian</option>
              <option value="Mezar Diego">Dr. Mezar Diego</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDetalle">
            <Form.Label className="font-celeste-crud">Detalle de Cita*</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Mascota"
              style={{ height: "100px" }}
              defaultValue={turno.detalleCita}
              ref={detalleCitaRef}           
            ></Form.Control>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicFecha">
            <Form.Label className="font-celeste-crud">Fecha (Lun a Vie)*</Form.Label>
            <Form.Control
              type="date"
              placeholder="21/02/2022"
              defaultValue={turno.fecha}
              ref={fechaRef}           
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHora">
            <Form.Label className="font-celeste-crud">Hora (08 a 17)*</Form.Label>
            <Form.Control
              type="time"
              placeholder="08:00"
              defaultValue={turno.hora}
              ref={horaRef}            
            ></Form.Control>
          </Form.Group> */}
          {/* inicio datepickery */}
          {turno.startDate!==undefined? 
          <Form.Group>
            <Form.Label className="font-celeste-crud">Seleccione fecha y hora</Form.Label>
                         
            <DatePicker
            locale={es}             
            selected={data}             
            onChange={(date) =>{handleDate(date)}}
            minDate={addDays(new Date(data),2)}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            showTimeSelect
            /*filterTime={(date) =>
              (date.getHours() >= 8 && date.getHours() <= 12)||(date.getHours() >= 14 && date.getHours() <= 18)
            }*/
            //excludeTimes={[setHours(setMinutes(new Date(),30),12)]}
            //minTime={setHours(setMinutes(new Date(), 0), 8)}
            //maxTime={setHours(setMinutes(new Date(), 0), 18)}
            includeTimes={[setHours(setMinutes(new Date(),0),8),
              setHours(setMinutes(new Date(),0),9),
              setHours(setMinutes(new Date(),0),10),
              setHours(setMinutes(new Date(),0),11),
              setHours(setMinutes(new Date(),0),12),
              setHours(setMinutes(new Date(),0),14),
              setHours(setMinutes(new Date(),0),15),
              setHours(setMinutes(new Date(),0),16),
              setHours(setMinutes(new Date(),0),17),
              setHours(setMinutes(new Date(),0),18)                
            ]}
            dateFormat="Pp"
            className="container-fluid form form-control mb-3"
          ></DatePicker>
          </Form.Group>
          :          
          <></>
          }                
          <div className="text-end">
            <button className="btn-celeste-crud">Guardar</button>
          </div>
        </Form>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default EditTurnos;
