// script.js

// Espera que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones de acordeón
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Obtiene el contenido relacionado
            const content = this.nextElementSibling;

            // Cierra otros acordiones abiertos si quieres comportamiento tipo 'solo uno abierto a la vez'
            document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                if (openContent !== content) {
                    openContent.classList.remove('open');
                }
            });

            // Alterna clase 'open' en el contenido seleccionado
            content.classList.toggle('open');
        });
    });
});
