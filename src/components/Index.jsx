import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carrousel from "./Carrousel";
import Cardsindex from "./Cardservicios";
import Cardservicios from "./Cardservicios";
import Cardsplanes from "./Cardplanes";
import Cardtienda from "./Cardtienda";
import Nuestrosaliados from "./Nuestrosaliados";
import Nuestoequipo from "./Nuestoequipo";
import Weather from "./weather/Weather";


const Index = ({weather}) => {
  return (
    <div>
      <NavBar />
      <Weather weather={weather}></Weather>
      <Carrousel />      
      <Cardservicios />
      <Nuestrosaliados/>
      <Cardsplanes />
      <Cardtienda />
      <Nuestoequipo/>
      <Footer />
    </div>
  );
};

export default Index;
