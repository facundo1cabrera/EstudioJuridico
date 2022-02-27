import PresentacionServicios from './PresentacionServicios';
import Form from '../components/Form';
import Slider from '../components/Slider';
import NavBar from '../components/NavBar';
import Nosotros from '../components/Nosotros';

const Inicio = () => {
  return (
    <div>
      <Slider />
      <NavBar />
      <Nosotros />
      <PresentacionServicios />
      <Form />
    </div>
  );
}

export default Inicio;
