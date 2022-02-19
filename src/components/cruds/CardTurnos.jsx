import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTurnos = ({turno}) => {
  return (
    <div>
      <Card className="my-4">
        
        <Card.Body>
          <div className="d-flex align-items-center justify-content-center mb-2">
            <Card.Title className="m-0 fw-bold">{turno.mascota}</Card.Title>            
          </div>
          <Card.Text><span className="fw-bold">Veterinario:</span> {turno.veterinario}</Card.Text>
          <Card.Text><span className="fw-bold">Detalle Cita:</span> {turno.detalleCita}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <span className="badge bg-celeste-crud fs-6">{turno.fecha}</span>
            <span className="badge bg-celeste-crud fs-6">{turno.hora}</span>            
          </div>         
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTurnos;
