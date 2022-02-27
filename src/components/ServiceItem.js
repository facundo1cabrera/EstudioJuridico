const ServiceItem = (props) => {
  return (
    <div className="serviceItem">
      <Image src={props.srcImage} className="serviceItem-image" layaout="fill"/>
      <p>{props.serviceType}</p>
    </div>
  );
};

export default ServiceItem;
