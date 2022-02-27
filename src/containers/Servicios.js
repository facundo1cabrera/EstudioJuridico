import Image from 'next/image';
import Link from 'next/link';

import choque from '../public/choque2.jpg';
import divorcio from '../public/divorcio.jpeg';
import sucesion from '../public/sucesion.jpeg';
import papeles from '../public/papeles.jpg'
import trabajador from '../public/trabajador.jpg'
import jubilacion from '../public/jubilacion.jpeg'

const Servicios = () => {
  return (
    <div className="servicios">
      <div className="headerservicios">
        <h1>Áreas de Práctica</h1>
        _____________________________________________
      </div>
      <div className="services-block">

        <div className="serviceItem familia">
          <div className="serviceImage">
            <Image src={divorcio} layout="fill" objectFit="cover" />
          </div>
          <h2>Familia</h2>
          _________________________________________________
          <p>Divorcios/ Cuestiones de familia/ Alimentos/ Tenencia/ Violencia familiar/ Régimen de visitas</p>
        </div>

        <div className="serviceItem laboral">
          <div className="serviceImage">
            <Image src={trabajador} layout="fill" objectFit="cover" />
          </div>
          <h2>Derecho laboral</h2>
          _________________________________________________
          <p>Trabajo en negro/ Despidos/ Intimaciones/ Accidentes de trabajo/ Juicios contra ART/ Servicio doméstico/ Acoso laboral (Mobbing)</p>
        </div>

        <div className="serviceItem sucesorio">
          <div className="serviceImage">
            <Image src={sucesion} layout="fill" objectFit="cover" />
          </div>
          <h2>Derecho sucesorio</h2>
          _________________________________________________
          <p>Sucesiones</p>
        </div>

        <div className="serviceItem comercial">
          <div className="serviceImage">
            <Image src={papeles} layout="fill" objectFit="cover" />
          </div>
          <h2>Derecho comercial</h2>
          _________________________________________________
          <p>Constitución de sociedades/ Concursos y quiebras/ Acuerdos preventivos/ Contratos comerciales/ Juicios Ejecutivos</p>
        </div>

        <div className="serviceItem previsional">
          <div className="serviceImage">
            <Image src={jubilacion} layout="fill" objectFit="cover" />
          </div>
          <h2>Derecho previsional</h2>
          _________________________________________________
          <p>Reajuste de haberes/ Jubilaciones con o sin aportes/ Jubilaciones amas de casa/ Pensiones/ Trámites denegados/ Actualización de haberes/ Reajustes</p>
        </div>

        <div className="serviceItem civil">
          <div className="serviceImage">
            <Image src={choque} layout="fill" objectFit="cover" />
          </div>
          <h2>Derecho civil</h2>
          _________________________________________________
          <p>Accidentes de tránsito/ Daños y perjuicios/ Contratos civiles/ Contratos de locación/ Asesoramiento/
             Administración de consorcios/ Desalojos/ Cobro de alquileres/ Propiedad horizontal/
             Compraventa/ Permutas/ Demanda de escrituración</p>
        </div>

      </div>
    </div>
  );
};

export default Servicios;

