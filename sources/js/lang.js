function applyLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then(res => res.json())
        .then(translations => {
            document.querySelectorAll('[data-key]').forEach(el => {
                const keyPath = el.getAttribute('data-key').split('.');
                let value = translations;
                keyPath.forEach(k => value = value?.[k]);
                if (value) el.textContent = value;
            });
        })
        .catch(err => console.error("Error cargando idioma", err));
}

document.querySelectorAll('#lang-menu button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
        localStorage.setItem('lang', lang);
    });
});
