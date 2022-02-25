import React, { useState, useEffect } from "react";
import {Container, Form,} from 'react-bootstrap';
import ListaComentarios from "./ListaComentarios";

const Comentario = () => {
  let ComentariosLocalstorage = JSON.parse(localStorage.getItem('listaComentarios')) || [];
  const [listaComentarios, setListaComentarios] = useState(ComentariosLocalstorage);
  const [comentarios, setComentarios] = useState("");

  useEffect(()=>{
    console.log('esto es una prueba');
    localStorage.setItem('listaComentarios', JSON.stringify(listaComentarios));
  },[listaComentarios])

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaComentarios([...listaComentarios, comentarios]);
    setComentarios('');
  };

  const borrarComentario = (nombre) =>{
    let arregloModificado = listaComentarios.filter((valor)=> valor !== nombre);
    setListaComentarios(arregloModificado);
  }
    return (
        <div className="container"> 
            <Form.Label onSubmit={handleSubmit} className="font-celeste-crud
            mt-5">Ingresa tu comentario*</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Comentar"
              onChange={(e) => setComentarios(e.target.value.trimStart())}
              value={comentarios}
              style={{ height: "100px" }}
            ></Form.Control>
          <div className="text-end mt-3">
            <button className="btn-celeste-crud" type="submit">Enviar</button>
          </div>
          <ListaComentarios arregloComentarios={listaComentarios} borrarComentario={borrarComentario}></ListaComentarios>
        </div>
    );
};

export default Comentario; 