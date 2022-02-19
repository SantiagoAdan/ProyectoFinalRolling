import React from 'react';
import LineaSeparado from "./img/LineaSeparado.png";
import Comedero from "./img/comedero.png"
import Hueso from "./img/hueso.png"
import Juguetes from "./img/juguetes.png"

const Cardtienda = () => {
    return (
      <div className="container mt-5 ">
        <h1 className="text-center colorfuente">NUESTRA TIENDA</h1>
        <img className="container" src={LineaSeparado} alt="lineaseparadora" />

      <div className="row mx-auto">
    <div className="col">
    <div className="w-100 my-3 col-sm-12 col-md-6 col-lg-3">
    <div className="card text-center border-celeste">
      <div className="card-body rounded-3">
        <img src={Comedero} className="img-fluid" alt="comedero" width={200}/>
        <h5 className="card-title colorfuente">Comedero</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
    </div>
    <div className="col order-5">
    <div className="w-100 my-3 col-sm-12 col-md-6 col-lg-3">
    <div className="card text-center border-celeste">
      <div className="card-body rounded-3">
        <img src={Juguetes} className="img-fluid" alt="perro" width={200}/>
        <h5 className="card-title colorfuente">Juguetes</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
    </div>
    <div className="col order-1">
    <div className="w-100 my-3 col-sm-12 col-md-6 col-lg-3">
    <div className="card text-center border-celeste">
      <div className="card-body rounded-3">
        <img src={Hueso} className="img-fluid" alt="alimento" width={200}/>
        <h5 className="card-title colorfuente">Alimento</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
    </div>
  </div>
  </div>
    );
};

export default Cardtienda;