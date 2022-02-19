import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Turno = ({turno, URLTurnos, getApiTurnos}) => {
  const handleDelete=(id)=>{
    Swal.fire({
      title: "¿Estas seguro de eliminar este turno?",
      text: "No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLTurnos}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire("Borrado!", "El turno ah sido borrado.", "success");
            getApiTurnos();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
    return (
        <tr>
                <td>{turno.mascota}</td>
                <td>{turno.veterinario}</td>
                <td>{turno.detalleCita}</td>
                <td>{turno.fecha}</td>
                <td>{turno.hora}</td>                
                <td className="w-25">
                  <div className="d-flex justify-content-center">
                    <Link
                      to={`/Adm/turnos/editar/${turno.id}`}
                      className=" btn-celeste-crud mx-1 text-decoration-none text-center"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn-celeste-crud mx-1" 
                      onClick={()=>{handleDelete(turno.id)}}                     
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
              
    );
};

export default Turno;