document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        // tu lógica aquí
      });
    } else {
      console.warn("No se encontró el botón con id 'toggleBtn'");
    }
  });
  