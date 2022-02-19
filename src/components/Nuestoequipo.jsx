import React from "react";
import nuestroequipo from "../components/img/NuestroEquipo.jpg";
import doc1 from "../components/img/doc1.png";
import doc2 from "../components/img/doc2.png";
import doc3 from "../components/img/doc3.png";
import "../App.css";

const Nuestoequipo = () => {
  return (
    <div style={{ backgroundImage: `url(${nuestroequipo})` }}>
      <h1 className="text-center text-light">NUESTRO EQUIPO</h1>
     {/*<div class="card-group">
  <div class="card m-5 bg-celeste rounded-3 mb-3 text-center">
     <img  src={doc1} class="card-img-top img-fluid" alt="doctor" width={150}/>
    <div class="card-body">
      <h5 class="card-title">Diego Altieri</h5>
      <p class="card-text">Especialista en cachorros</p>
    </div>
  </div>
  <div class="card m-5 bg-celeste rounded-3 mb-3 text-center">
     <img  src={doc2} class="card-img-top img-fluid" alt="doctor" width={150}/>
    <div class="card-body">
      <h5 class="card-title">Juan Gomez</h5>
      <p class="card-text">Profesional en mascotas adultas</p>
    </div>
  </div>
  <div class="card m-5 bg-celeste rounded-3 mb-3 text-center">
     <img  src={doc3} class="card-img-top img-fluid" alt="doctor" width={150}/>
    <div class="card-body">
      <h5 class="card-title">Florencia Diaz</h5>
      <p class="card-text">Experta en mascotas jovenes</p>
    </div>
  </div>
  </div>*/}
  <div className="container">
  <div class="row align-items-center">
    <div class="col">
   <img src={doc1} alt="" width={200}/>
  <p className="text-center text-light">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="col">
      <img src={doc2} alt="" width={200}/>
      <p className="text-center text-light">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="col">
    <img src={doc3} alt="" width={200}/>
  <p className="text-center text-light">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  </div>
    </div>
  );
};

export default Nuestoequipo;
