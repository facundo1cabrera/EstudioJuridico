import React from 'react';

const Servicio = ({ props }) => {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <a href="/contacto"></a>
    </div>
  );
};

export default Servicio;
