const Form = () => {
  return (
    <>
      <div className="contactUs" id="contactUs">
        <div className="title">
          <h2>Contacto</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Dejanos un mensaje!</h3>
            <form action="/api/form" method="post">
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>Nombre</span>
                    <input type="text" placeholder="Pedro" name="nombre" required/>
                  </div>
                  <div className="inputBox">
                    <span>Apellido</span>
                    <input type="text" placeholder="Gonzalez" name="apellido" required />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="Juan@email.com" name="email" required />
                  </div>
                  <div className="inputBox">
                    <span>Telefono</span>
                    <input type="text" placeholder="11 2432 2352" name="telefono" required/>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <textarea placeholder="Escribi tu mensaje aqui." name="mensaje" required minLength="10"></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <button type="submit" value="enviar" >enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Informacion de Contacto</h3>
            <div className="infoBox">

                <p>Brown 1243, Moron</p>

                <p>info@estudioperezasoc.com.ar</p>

                <p>11 7113-2390</p>

            </div>
          </div>

          <div className="contact map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1681802547373!2d-58.625653177502514!3d-34.65045538154481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc75e22fa227d%3A0x5a90438dc4297958!2sEFS%2C%20Almte.%20Guillermo%20Brown%201058%2C%20B1708%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1645899305684!5m2!1ses-419!2sar" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
