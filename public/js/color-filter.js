document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('.filter-button');
    const colorMenu = document.querySelector('.color-menu');
    const colorCheckboxes = document.querySelectorAll('.color-option input[type="checkbox"]');
    let isOpen = false;


    function updateButtonText() {
        const checkedColors = Array.from(colorCheckboxes)
            .filter(checkbox => checkbox.checked && checkbox.value !== '') 
            .map(checkbox => checkbox.value);
 
        if (checkedColors.length === 0) {
            filterButton.textContent = 'COLOR';
        } else if (checkedColors.length === 1) {
            filterButton.textContent = checkedColors[0].toUpperCase();
        } else {
            filterButton.textContent = 'VARIOS';
        }
    }

    colorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            
            if (this.id === 'all-colors' && this.checked) {
                colorCheckboxes.forEach(cb => {
                    if (cb.id !== 'all-colors') cb.checked = false;
                });
            } else if (this.checked) {
                
                const allColorsCheckbox = document.querySelector('#all-colors');
                if (allColorsCheckbox) allColorsCheckbox.checked = false;
            }
            updateButtonText();
        });
    }); 


    filterButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isOpen) {
            colorMenu.classList.add('hidden');
        } else {
            colorMenu.classList.remove('hidden');
        }
        isOpen = !isOpen;
    });

    
    colorMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    
    window.addEventListener('click', function(e) {
        if (!filterButton.contains(e.target) && !colorMenu.contains(e.target)) {
            colorMenu.classList.add('hidden');
            isOpen = false;
        }
    });
    updateButtonText();
});