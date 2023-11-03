// Obtén una referencia a los elementos del DOM
const temas = document.querySelectorAll('.tema');
const temaElegido = document.getElementById('temaElegido');

// Función para elegir un tema al azar
function elegirTema() {
    const indiceAleatorio = Math.floor(Math.random() * temas.length);
    const temaSeleccionado = temas[indiceAleatorio].textContent;
    
    // Oculta todos los temas excepto el seleccionado
    temas.forEach((tema, index) => {
        if (index !== indiceAleatorio) {
            tema.style.display = 'none';
        }
    });
    
    return temaSeleccionado;
}

// Muestra el tema seleccionado
function mostrarTema() {
    const tema = elegirTema();
    temaElegido.textContent = tema;
}

// Llama a la función para mostrar el tema al cargar la página
mostrarTema();
