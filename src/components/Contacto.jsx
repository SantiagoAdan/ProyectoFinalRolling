import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import background from "./img/contactoIMG.jpg";

const Contacto = () => {
  return (
<div>
<div style={{ backgroundImage: `url(${background})` }}>
<NavBar/>
<div className="container ">
<h1 className='text-center mt-3 text-light '>Contacto</h1>
            <hr className='text-light' />
            <article className='row'>
                <div className='col-sm-12 col-md-6 mt-4'>
                    <form>
                        <div className='mb-3 container'>
                            <label for="NombreApellido" className='form-label text-light'>Nombre y Apellido</label>
                            <input id="NombreApellido" type="text" class="form-control" placeholder="Juan Perez" required minlength="4" maxlength="30"></input>
                        </div>
                        <div className='mb-3 container'>
                        <label for="e-mail" class="form-label m-2 text-light">E-mail</label>
                        <input id="e-mail" type="email" class="form-control" placeholder="Juanperez@gmail.com" required maxlength="40"></input>
                        </div>
                        <div className='mb-3 container'>
                        <label for="consulta" class="form-label text-light">Consulta</label>
                        <textarea id="consulta" cols="30" rows="4" class="form-control" placeholder="Escriba su consulta aqui" maxlength="250" required=""></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-light container">Enviar</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-6 mb-6 mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777457!2d-65.2093904844119!3d-26.836696096502912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1631390004391!5m2!1ses-419!2sar" height="450" class="w-100 mapa p-3" allowfullscreen loading="lazy"></iframe>
                </div>
            </article>
            </div>
    <Footer/>
  </div>
  </div>
  );
};

export default Contacto;
