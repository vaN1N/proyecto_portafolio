
//Funcionalidad para cambiar el tema
const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;
    
    toggleBtn.addEventListener("click", () => {
    const isDark = body.getAttribute("data-bs-theme") === "dark";
    body.setAttribute("data-bs-theme", isDark ? "light" : "dark");
});