import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo-navbar">
          <Link href="/">
            <a>Estudio Juridicos Perez y asociados</a>
          </Link>
          </div>
        <div className="links">
          <Link href="/contacto">
            <a className="link">Contactanos</a>
          </Link>
          <Link href="/servicios">
            <a className="link">Servicios</a>
          </Link>
          <Link href="/">
            <a className="link">Nosotros</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
