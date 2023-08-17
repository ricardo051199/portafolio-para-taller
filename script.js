document.querySelector('.btn-toggle-theme').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');

    const slider = document.querySelector('.slider');
    if (body.classList.contains('dark')) {
        slider.style.left = '20px';
        document.querySelector('.theme-text').textContent = 'Tema Claro';
    }
    
    if (body.classList.contains('light')) {
        slider.style.left = '2px';
        document.querySelector('.theme-text').textContent = 'Tema Oscuro';
    }
});
