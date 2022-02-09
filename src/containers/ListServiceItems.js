import React, { useState } from 'react';
import data from '../utils/servicios';
import ServiceItem from '../components/ServiceItem';
import ServicioModal from '../components/ServicioModal';

const ListServiceItems = () => {
  const penal = data.penal;
  const empleadores = data.laboral.empleadores;
  const trabajadores = data.laboral.trabajadores;
  const civil = data.civil;
  const comercial = data.comercial;

  const [visiblePenal, setVisiblePenal] = useState(false);
  const [visibleEmpleadores, setVisibleEmpleadores] = useState(false);
  const [visibleTrabajadores, setVisibleTrabajadores] = useState(false);
  const [visibleCivil, setVisibleCivil] = useState(false);
  const [visibleComercial, setVisibleComercial] = useState(false);

  return (
    <>
      <div className="seccionesservicios">
        <div className="serviciosmodaldiv">
          <div
            className="bottonmodal"
            onClick={() => setVisiblePenal(!visiblePenal)}
          >
            <p>Penal</p>
            {visiblePenal ? <ServicioModal servicio={penal} /> : null}
          </div>
        </div>

        <div className="serviciosmodaldiv">
          <div
            className="bottonmodal"
            onClick={() => setVisibleEmpleadores(!visibleEmpleadores)}
          >
            <p>Empleadores</p>
            {visibleEmpleadores ? <ServicioModal servicio={empleadores} /> : null}
          </div>
        </div>

        <div className="serviciosmodaldiv">
          <div
            className="bottonmodal"
            onClick={() => setVisibleTrabajadores(!visibleTrabajadores)}
          >
            <p>Trabajadores</p>
            {visibleTrabajadores ? <ServicioModal servicio={trabajadores} /> : null}
          </div>
        </div>

        <div className="serviciosmodaldiv">
          <div
            className="bottonmodal"
            onClick={() => setVisibleCivil(!visibleCivil)}
          >
            <p>Civiles</p>
            {visibleCivil ? <ServicioModal servicio={civil} /> : null}
          </div>
        </div>

        <div className="serviciosmodaldiv">
          <div
            className="bottonmodal"
            onClick={() => setVisibleComercial(!visibleComercial)}
          >
            <p>Comerciales</p>
            {visibleComercial ? <ServicioModal servicio={comercial} /> : null}
          </div>
        </div>


      </div>
    </>
  );
};

export default ListServiceItems;
