import papeles from '../public/papeles.jpg';
import Image from 'next/image';

const PresentacionServicios = () => {
  return (
    <div className="presentacion-servicios-background">
      <div className="presentacion-servicios">
        <div className="servicio-presentacion grillaservicios-uno">
          <Image src={papeles} layout="fill" alt="" objectFit="cover" />
        </div>
        <div className="servicio-presentacion grillaservicios-dos">
          <h2>Servicios</h2>
          <div className="grillaservicios-dos-p">
            <p>-Penal</p>
            <p>-Tributario</p>
            <p>-Laboral</p>
            <p>-Civil</p>
            <p>- Comercial</p>
          </div>
          <a href="/servicio">Mas Informacion</a>
        </div>
        <div className="servicio-presentacion grillaservicios-tres">
          Amplia Experiencia
        </div>
        <div className="servicio-presentacion grillaservicios-cuatro">
          Seguridad
        </div>
        <div className="servicio-presentacion grillaservicios-cinco">
          Equipo Profesional
        </div>
        <div className="servicio-presentacion grillaservicios-seis">
          Sustentabilidad y Responsabilidad
        </div>
      </div>
    </div>
  );
};

export default PresentacionServicios;
