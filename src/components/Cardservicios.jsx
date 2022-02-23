import React from "react";
import perrocard from "./img/perrocard.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LineaSeparado from "./img/LineaSeparado.png";

const Cardservicios = () => {
  return (
    <div className="container text-end border border-danger">
      <h1 className="text-center mt-4 colorfuente">SERVICIOS</h1>
      <img
        className="container m-4"
        src={LineaSeparado}
        alt="lineaseparadora"
      />
      <CardGroup>
        <Card border="light">
          <h3 className="colorfuente">Peluqueria</h3>
          <p className="colorfuente">
            Tu mascota esta en las mejores manos, con nosotros, deja que tu
            mejor amigo reciba la mejor atencion{" "}
          </p>
          <div >
            <button
              type="button"
              className="btn-celeste-serv text-end "
            >
              Ver Mas
            </button>
          </div>
          <h3 className="colorfuente">Guardia Veterinaria</h3>
          <p className="colorfuente">Urgencias las 24 horas</p>
          <div >
            <button
              type="button"
              className="btn-celeste-serv text-end "
            >
              Ver Mas
            </button>
          </div>
        </Card>

        <Card border="light">
          <Card.Img className="img-fluid" variant="top" src={perrocard} />
        </Card>

        <Card border="light">
          <h3 className="colorfuente">Odontologia Veterinaria</h3>
          <p className="colorfuente">
            Cuidar los dientes de tu mascota es muy importante para ayudar a
            mantener su salud general
          </p>
          <div >
            <button
              type="button"
              className="btn-celeste-serv text-end "
            >
              Ver Mas
            </button>
          </div>
          <h3 className="colorfuente">Rayos X</h3>
          <p className="colorfuente">
            Los mejores equipos de RX para el uso veterinario
          </p>
          <div >
            <button
              type="button"
              className="btn-celeste-serv text-end "
            >
              Ver Mas
            </button>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cardservicios;
