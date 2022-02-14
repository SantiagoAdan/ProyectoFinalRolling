import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import avatarAlan from "./img/Alan.png"
import avatarSanti from "./img/Santy.png"
import avatarMarta from "./img/Mel.png"
import avatarLeonel from "./img/Leonell.png"
import avatarLuis from "./img/Luis.png"
import acercaDeNosotros from "./img/acercadeNosotros.jpg"

const QuienesSomos = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img src={acercaDeNosotros} alt="imagen acercaDeNosotros" width="100%" />
            <h1 className='container text-center mt-5 text-info '>NUESTRO EQUIPO</h1>
             <hr />
            <section className='container mt-3'>
                <h3 className="text-info">Especialistas en crear contenidos, investigadores de los lugares mas recónditos de Google, rápidos hasta donde la calidad no se deteriora, eficaces en llevar a cabo un plan, tu plan y mas alla de todo eso tu equipo</h3>

            </section>
            <section>
                <article className="album py-5">
                    <div className="container">
                    <div class="row row-cols-1 row-cols-sm-12 row-cols-md-3 g-3">
                <div class="col">
                    <img src={avatarAlan} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" alt='avatarAlan'/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Alan Chibilisco </h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">33 Años</p>
                            <p class="fontSubtitulos">alan.chibilisco@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarSanti} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Santiago Adan</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">22 Años</p>
                            <p class="fontSubtitulos">santiadan25@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarMarta} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Marta Arriola</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">34 Años</p>
                            <p class="fontSubtitulos">arriolamarta01@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarLeonel} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Leonel Alderete</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">17 Años</p>
                            <p class="fontSubtitulos">leonel.e.alderete@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src= {avatarLuis} class="bd-placeholder-img card-img-top rounded-circle" width="100px" height="400px" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false"/>
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <h5 class="fontTitulos">Luis Reartez</h5>
                            <p class="fontSubtitulos">Estudiante de Programación</p>
                            <p class="fontSubtitulos">27 Años</p>
                            <p class="fontSubtitulos">Luisreartez55@gmail.com</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div> 
                    </div>
                    </article>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default QuienesSomos;