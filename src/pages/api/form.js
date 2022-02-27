const { sendMail } = require('../../utils/sendMail');

export default function handler(req, res) {
  const { nombre, apellido, email, telefono, mensaje }= req.body;
  const tema = nombre + ' ' + apellido;
  const mensajefinal = `Se coomunicó ${tema}, dejando los siguientes datos de contacto:
   email: ${email},
   numero: ${telefono}.
   Dejó el siguiente mensaje: ${mensaje}`;
  sendMail(tema, mensajefinal);
  res.redirect('/')
}
