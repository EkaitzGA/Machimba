document.addEventListener('DOMContentLoaded', () => {
    const filterCollectionButton = document.querySelector('.filter-collection-button');
    const collectionMenu = document.querySelector('.collection-menu');
    const collectionCheckboxes = document.querySelectorAll('.collection-option input[type="checkbox"]');
    let isOpen = false;


    function updateButtonText() {
        const checkedCollections = Array.from(collectionCheckboxes)
            .filter(checkbox => checkbox.checked && checkbox.value !== '') // Ignoramos "Todas"
            .map(checkbox => checkbox.value);
 
        if (checkedCollections.length === 0) {
            filterCollectionButton.textContent = 'COLECCIÓN';
        } else if (checkedCollections.length === 1) {
            // Extraer solo el nombre principal de la colección (sin la palabra "Collection")
            const collectionName = checkedCollections[0].split(' Collection')[0].toUpperCase();
            filterCollectionButton.textContent = collectionName;
        } else {
            filterCollectionButton.textContent = 'VARIAS';
        }
    }

    collectionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Si se selecciona "Todas", deseleccionar las demás
            if (this.id === 'all-collections' && this.checked) {
                collectionCheckboxes.forEach(cb => {
                    if (cb.id !== 'all-collections') cb.checked = false;
                });
            } else if (this.checked) {
                // Si se selecciona cualquier otra, deseleccionar "Todas"
                const allCollectionsCheckbox = document.querySelector('#all-collections');
                if (allCollectionsCheckbox) allCollectionsCheckbox.checked = false;
            }
            updateButtonText();
        });
    });

    filterCollectionButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isOpen) {
            collectionMenu.classList.add('hiddenC');
        } else {
            collectionMenu.classList.remove('hiddenC');
        }
        isOpen = !isOpen;
    });

    // Evitar que los clicks dentro del menu lo cierren
    collectionMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Cerrar al hacer click fuera
    window.addEventListener('click', function(e) {
        if (!filterCollectionButton.contains(e.target) && !collectionMenu.contains(e.target)) {
            collectionMenu.classList.add('hiddenC');
            isOpen = false;
        }
    });
    updateButtonText();
});