import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Paciente = ({paciente, URLPacientes, getApiPacientes}) => {
    const handleDelete=(id)=>{
      Swal.fire({
        title: "¿Estas seguro de eliminar este paciente?",
        text: "No puedes revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Borrar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(`${URLPacientes}/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.status === 200) {
              Swal.fire("Borrado!", "El paciente ah sido borrado.", "success");
              getApiPacientes();
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
    return (                    
            <tr>
                <td>{paciente.id}</td>
                <td>{paciente.nombreDueño}</td>
                <td>{paciente.apellidoDueño}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.email}</td>
                <td>{paciente.nombreMascota}</td>
                <td>{paciente.especieMascota}</td>
                <td>{paciente.razaMascota}</td>
                <td className="w-25">
                  <div className="d-flex justify-content-center">
                    <Link
                      to={`/Adm/pacientes/editar/${paciente.id}`}
                      className=" btn-celeste-crud mx-1 text-decoration-none text-center"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn-celeste-crud mx-1"
                      onClick={()=>{handleDelete(paciente.id)}}                      
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>        
    );
};

export default Paciente;