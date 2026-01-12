const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const hiddenMessage = document.getElementById('hiddenMessage');

// Acción cuando acepta
btnSi.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    btnNo.style.display = 'none';
    alert("¡Sabía que eras de buen corazón! 💖");
});

// El botón "No" se escapa del ratón
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'absolute';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
});
