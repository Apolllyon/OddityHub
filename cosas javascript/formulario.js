
// Obtén el formulario y el mensaje de agradecimiento por su ID
var formulario = document.getElementById("formulario");
var mensajeAgradecimiento = document.getElementById("mensaje-agradecimiento");

// Agrega un evento de envío al formulario
formulario.addEventListener("submit", function (event) {
  // Evita que el formulario se envíe de forma predeterminada
  event.preventDefault();

  // Oculta el formulario
  formulario.style.display = "none";

  // Muestra el mensaje de agradecimiento
  mensajeAgradecimiento.style.display = "block";
});

