document.addEventListener('DOMContentLoaded', () => {
    const filterMaterialButton = document.querySelector('.filter-material-button');
    const materialMenu = document.querySelector('.material-menu');
    const materialCheckboxes = document.querySelectorAll('.material-option input[type="checkbox"]');
    let isOpen = false;

    function updateButtonText() {
        const checkedMaterials = Array.from(materialCheckboxes)
            .filter(checkbox => checkbox.checked && checkbox.value !== '') // Ignoramos "Todos"
            .map(checkbox => checkbox.value);

        if (checkedMaterials.length === 0) {
            filterMaterialButton.textContent = 'MATERIAL';
        } else if (checkedMaterials.length === 1) {
            filterMaterialButton.textContent = checkedMaterials[0].toUpperCase();
        } else {
            filterMaterialButton.textContent = 'VARIOS';
        }
    }

        // Event listener para los checkboxes
        materialCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Si se selecciona "Todos", deseleccionar los demás
                if (this.id === 'all-materials' && this.checked) {
                    materialCheckboxes.forEach(cb => {
                        if (cb.id !== 'all-materials') cb.checked = false;
                    });
                } else if (this.checked) {
                    // Si se selecciona cualquier otro, deseleccionar "Todos"
                    const allMaterialsCheckbox = document.querySelector('#all-materials');
                    if (allMaterialsCheckbox) allMaterialsCheckbox.checked = false;
                }
                updateButtonText();
            });
        });


    filterMaterialButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isOpen) {
            materialMenu.classList.add('hiddenM');
        } else {
            materialMenu.classList.remove('hiddenM');
        }
        isOpen = !isOpen;
    });

    // Evitar que los clicks dentro del menu lo cierren
    materialMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Cerrar al hacer click fuera
    window.addEventListener('click', function(e) {
        if (!filterMaterialButton.contains(e.target) && !materialMenu.contains(e.target)) {
            materialMenu.classList.add('hiddenM');
            isOpen = false;
        }
    });
    updateButtonText();
});

