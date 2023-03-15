const formContacto = document.querySelector("#formContacto");
const txNombre = document.querySelector("#txNombre");
const txEmail = document.querySelector("#txEmail");
const txTelefono = document.querySelector("#txTelefono");
const txMensaje = document.querySelector("#txMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

function limpiarFormulario() {
  txNombre.value = "";
  txEmail.value = "";
  txTelefono.value = "";
  txMensaje.value = "";
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function enviarFormulario(e) {
  e.preventDefault(); // evita que se recargue la página y se guarden los datos en la URL
  limpiarFormulario();
  mostrarMensaje("¡Tu mensaje fue enviado con éxito!");
}

formContacto.addEventListener("submit", enviarFormulario);
