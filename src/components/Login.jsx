import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Login = () => {
  return (<div>
      <NavBar />
      <div class="">
        <form></form>
        <div class="row justify-content-evenly">
        <div class="row align-items-center  w-100">
          <div class="col-4 col-sm-12 col-md-6" data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500">
            <h1 class="display-4 mt-3">Accede a tu cuenta</h1>
            <form>
              <div>
                <label for="InputEmail1" class="form-label">Email / Usuario</label>
                <input class="form-control" required placeholder="RollingVetUser"></input>
              </div>
              <div class="mb-3">
                <label for="InputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" required placeholder="Ingrese su contraseña..." ></input>
              </div>
              <div>
              <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
            </div>
            </form>
            <hr />
        </div>
        </div>
        </div>
      <Footer />
      </div>
      </div>
)  ;
  };

export default Login;
