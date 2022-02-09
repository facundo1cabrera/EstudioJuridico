const Form = () => {
  return (
    <>
      <div className="contactUs">
        <div className="title">
          <h2>Contacto</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Dejanos un mensaje!</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>Nombre</span>
                    <input type="text" placeholder="Pedro" />
                  </div>
                  <div className="inputBox">
                    <span>Apellido</span>
                    <input type="text" placeholder="Gonzalez" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="Juan@email.com" />
                  </div>
                  <div className="inputBox">
                    <span>Telefono</span>
                    <input type="text" placeholder="11 2432 2352" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <textarea placeholder="Escribi tu mensaje aqui."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="enviar" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Informacion de Contacto</h3>
            <div className="infoBox">
              <div>
                <p>Brown 1243, Moron</p>
              </div>
              <div>
                <a href="#">Loremipsum@gmail.com</a>
              </div>
              <div>
                <a href="#">32 435454 2434</a>
              </div>
            </div>
          </div>

          <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.543830511913!2d-58.624326170792955!3d-34.65027499877797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc75e3b6a376f%3A0x6ec42a5a3d273d95!2sAlmte.%20Guillermo%20Brown%201081%2C%20B1708EFS%20Gran%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1644178322469!5m2!1ses-419!2sar"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
