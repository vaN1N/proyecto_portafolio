const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('span');

themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    
    // si esta en oscuro, pasamos a claro
    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        themeIcon.textContent = 'dark_mode'; // icono de luna para el modo oscuro
    } else { // si esta en claro, pasamos a oscuro
        html.setAttribute('data-bs-theme', 'dark');
        themeIcon.textContent = 'light_mode'; // icono de sol para aclarar
    }
});
