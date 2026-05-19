document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('theme-toggle');

    if (boton) {
        boton.addEventListener('click', () => {
            // Intercambia la clase en el body para aplicar el tema oscuro
            document.body.classList.toggle('cambio-color');
            
            // Cambia el texto del botón dependiendo del modo activo
            if (document.body.classList.contains('cambio-color')) {
                boton.textContent = 'Modo Claro';
            } else {
                boton.textContent = 'Modo Oscuro';
            }
        });
    }
});