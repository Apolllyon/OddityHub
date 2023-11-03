document.addEventListener("DOMContentLoaded", function() {
  const hamburguesaIcono = document.querySelector(".hamburguesa-icono");
  const listaNavegacion = document.querySelector("#in-navegacion ul");

  hamburguesaIcono.addEventListener("click", function(event) {
    // Evitar que el clic en el icono cierre el menú
    event.stopPropagation();

    // Alternar la visibilidad de la lista de navegación
    if (listaNavegacion.style.display === "block") {
      listaNavegacion.style.display = "none";
    } else {
      listaNavegacion.style.display = "block";

      // Agregar un evento para cerrar el menú si se hace clic fuera
      document.addEventListener("click", closeMenuOnClickOutside);
    }
  });

  // Función para cerrar el menú cuando se hace clic fuera de él
  function closeMenuOnClickOutside(event) {
    if (!listaNavegacion.contains(event.target) && event.target !== hamburguesaIcono) {
      listaNavegacion.style.display = "none";

      // Quitar el evento para cerrar el menú
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  }
});
