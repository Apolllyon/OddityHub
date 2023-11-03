document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("ventanaEmergente").style.display = "flex";
    }, 5000);  // Mostrar después de 5 segundos

    document.getElementById("botonCerrar").addEventListener("click", () => {
        document.getElementById("ventanaEmergente").style.display = "none";
    });

    document.getElementById("botonAceptar").addEventListener("click", () => {
        // Acción cuando el usuario acepta (puedes redirigir a otra página aquí)
    });

    document.getElementById("botonDeclinar").addEventListener("click", () => {
        document.getElementById("ventanaEmergente").style.display = "none";
    });
});
