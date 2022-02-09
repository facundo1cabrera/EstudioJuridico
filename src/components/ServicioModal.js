import ServiceItem from './ServiceItem';

const ServicioModal = ({ servicio }) => {


  return (
    <div className="modaldiv">
      <div className="servicioslist">
        <ul>
          {servicio.map((item) => (
            <ServiceItem item={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicioModal;
