import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemComentarios = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {props.dato} 
            <Button variant='danger' onClick={()=> props.borrarComentario(props.dato)}>Borrar</Button>
        </ListGroup.Item>     
    );
};

export default ItemComentarios;