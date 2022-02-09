import Image from 'next/image';
import locationSVG from '../public/location-outline.svg';


const ContactInfo = () => {
  return (
    <div className="contact info">
      <h3>Contact Info</h3>
      <div className="infoBox">
        <div>
          <span>
            <Image src={locationSVG} />
          </span>
          <p>Brown 1243, Moron</p>
        </div>
      </div>
      <div>
        <span></span>
        <a href="#">Loremipsum@gmail.com</a>
      </div>
      <div>
        <span></span>
        <a href="#">32 435454 2434</a>
      </div>
    </div>
  );
};

export default ContactInfo;
