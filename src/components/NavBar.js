import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link href="/contacto">
          <a className="link">Contactanos</a>
        </Link>
        <Link href="/servicios">
          <a className="link">Servicios</a>
        </Link>
        <Link href="/nosotros">
          <a className="link">Nosotros</a>
        </Link>
      </div>

    </>
  );
};

export default NavBar;
