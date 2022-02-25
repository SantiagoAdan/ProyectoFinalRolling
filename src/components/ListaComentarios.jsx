import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemComentarios from "./ItemComentarios";

const ListaComentarios = (props) => {
  return (
    <div>
      <ListGroup>
    {
 props.arregloComentarios.map((valor, posicion)=> <ItemComentarios key={posicion} dato={valor} borrarComentario={props.borrarComentario}></ItemComentarios> )
    }
      </ListGroup>
    </div>
  );
};

export default ListaComentarios;
