
document.addEventListener('DOMContentLoaded', () => {
    
    const qtyBtns = document.querySelectorAll('.qty-btn');
    qtyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentNode.querySelector('.qty-input');
            if(e.target.textContent === '+') {
                input.value = parseInt(input.value) + 1;
            } else {
                input.value = Math.max(1, parseInt(input.value) - 1);
            }
        });
    });
 
    
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    
    if(checkoutBtn && checkoutForm) {
        checkoutForm.style.display = 'none';
        checkoutBtn.addEventListener('click', () => {
            checkoutForm.style.display = checkoutForm.style.display === 'none' ? 'block' : 'none';
        });
    }
 
    
    const form = document.getElementById('checkout-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
 
            if(!address || !phone) {
                e.preventDefault();
                alert('Por favor completa todos los campos');
            }
        });
    }
 });


// const toggleButton = document.getElementById('button-show-data');
// const form = document.getElementById('form-show-data');

// // Agregamos un listener al botón
// toggleButton.addEventListener('click', () => {
//     // Alternar entre las clases 'hidden' y 'visible'
//     if (form.classList.contains('hidden-data')) {
//         form.classList.remove('hidden-data');
//         form.classList.add('visible-data');
//     } else {
//         form.classList.remove('visible-data');
//         form.classList.add('hidden-data');
//     }
// });

