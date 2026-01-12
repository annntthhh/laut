const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const hiddenMessage = document.getElementById('hiddenMessage');
let rainInterval;

// Función para generar gotas de lluvia
function startRain() {
    if (!rainInterval) {
        rainInterval = setInterval(() => {
            const drop = document.createElement('div');
            drop.classList.add('drop');
            drop.style.left = Math.random() * window.innerWidth + 'px';
            drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            document.body.appendChild(drop);
            
            // Eliminar la gota después de que caiga
            setTimeout(() => {
                drop.remove();
            }, 1000);
        }, 50);
    }
}

// Función para detener la lluvia
function stopRain() {
    clearInterval(rainInterval);
    rainInterval = null;
    document.querySelectorAll('.drop').forEach(d => d.remove());
}

// Acción cuando hace click en SI
btnSi.addEventListener('click', () => {
    stopRain();
    hiddenMessage.style.display = 'block';
    btnNo.style.display = 'none';
    document.querySelector('.heart').innerHTML = "💖";
    
    // Explosión de polvos mágicos (Confetti)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff8fab', '#ffffff', '#ffeb3b']
    });
});

// Cuando el mouse pasa sobre el NO: escapa y empieza a llover
btnNo.addEventListener('mouseover', () => {
    startRain();
    
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
});
