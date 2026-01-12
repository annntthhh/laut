const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const hiddenMessage = document.getElementById('hiddenMessage');

btnSi.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    btnNo.style.display = 'none';
    // Cambiamos el corazón a uno feliz
    document.querySelector('.heart').innerHTML = "💖";
});

btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'fixed'; // Fixed para que se mueva por toda la pantalla
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
});
