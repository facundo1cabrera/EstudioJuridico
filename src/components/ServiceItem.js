import Link from 'next/link';

const ServiceItem = ({ item }) => {
  return (
    <>
      <div className="servicioitem">
        <p className="serviceitemtitle">{item}</p>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </div>
    </>
  );
};

export default ServiceItem;
