
const toggleButton = document.getElementById('button-show-data');
const form = document.getElementById('form-show-data');

// Agregamos un listener al botón
toggleButton.addEventListener('click', () => {
    // Alternar entre las clases 'hidden' y 'visible'
    if (form.classList.contains('hidden-data')) {
        form.classList.remove('hidden-data');
        form.classList.add('visible-data');
    } else {
        form.classList.remove('visible-data');
        form.classList.add('hidden-data');
    }
});

