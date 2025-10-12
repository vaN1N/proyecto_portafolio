// sources/js/lang.js
const langMenu = document.getElementById('lang-menu');
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
});

document.querySelectorAll('#lang-menu button').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
        langMenu.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'es';
    changeLanguage(savedLang);
});

function changeLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
        document.querySelectorAll('[data-key]').forEach(el => {
            const keys = el.getAttribute('data-key').split('.');
            let value = data;
            keys.forEach(k => value = value[k]);
            if (value) el.textContent = value;
        });
        localStorage.setItem('lang', lang);
        })
        .catch(err => console.error('Error cargando idioma:', err));
}

function applyLanguage(lang) {
    fetch(`../lang/${lang}.json`)
    .then(response => {
        if (!response.ok) throw new Error("Archivo no encontrado");
        return response.json();
    })
    .then(data => {
        document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        const keys = key.split(".");
        let value = data;

        // Navega por el objeto JSON usando las claves
        keys.forEach(k => {
            value = value[k];
        });

        if (value) {
            el.textContent = value;
        }
        });
    })
    .catch(error => {
        console.error("Error al aplicar idioma:", error);
    });
}


