import Image from 'next/image';
import divorcio from './../public/divorcio.jpeg';
import choque from './../public/choque.jpeg';
import sucesiones from './../public/sucesion.jpeg';
import jubilaciones from './../public/jubilacion.jpeg';

const Slider = () => {
  return (
    <div className="container-slider">
      <ul className="slider">
        <li id="slide1">
          <Image
            src={choque}
            className="slide1"
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <div className="slider-message">
            <h2>Accidentes Automovilisticos</h2>
            <p>¿Queres asesorarte acerca de como tenes que actuar?</p>
            <a href="#contactUs">Contactanos!</a>
          </div>
        </li>
        <li id="slide2">
          <Image
            src={divorcio}
            className="slide2"
            layout="fill"
            objectFit="cover"
          />
          <div className="slider-message">
            <h2>Divorcios</h2>
            <p>¿Queres asesorarte acerca de como tenes que actuar?</p>
            <a href="#contactUs">Contactanos!</a>
          </div>
        </li>

        <li id="slide3">
          <Image
            src={sucesiones}
            className="slide3"
            layout="fill"
            objectFit="cover"
          />
          <div className="slider-message">
            <h2>Sucesiones</h2>
            <p>¿Queres asesorarte acerca de como funciona el proceso?</p>
            <a href="#contactUs">Contactanos!</a>
          </div>
        </li>

        <li id="slide4">
          <Image
            src={jubilaciones}
            className="slide4"
            layout="fill"
            objectFit="cover"
          />
          <div className="slider-message">
            <h2>Jubilaciones</h2>
            <p>¿Queres asesorarte acerca de como tramitar tu jubilación?</p>
            <a href="#contactUs">Contactanos!</a>
          </div>
        </li>
      </ul>

      <div className="slider-menu">
        <ul className="slider-links">
          <a href="#slide1">Accidentes Automovilisticos</a>
          <a href="#slide2">Divorcios</a>
          <a href="#slide3">Sucesiones</a>
          <a href="#slide4">Jubilaciones</a>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
