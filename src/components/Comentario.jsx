import React from 'react';
import {Container, Form,} from 'react-bootstrap';

const Comentario = () => {
    return (
        <div>
            <Container>     
            <Form.Label className="font-celeste-crud
            mt-5">Ingresa tu comentario*</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Comentar"
              style={{ height: "100px" }}
            ></Form.Control>
          <div className="text-end mt-3">
            <button className="btn-celeste-crud">Enviar</button>
          </div>
      
            </Container>

        </div>
    );
};

export default Comentario;