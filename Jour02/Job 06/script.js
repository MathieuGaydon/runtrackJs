document.addEventListener('DOMContentLoaded', (event) => {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                activateKonamiStyle();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function activateKonamiStyle() {
        document.body.style.backgroundColor = '#0062FF'; 
        document.body.style.color = '#ffffff';
        document.body.style.fontFamily = 'Arial, sans-serif';
        alert('Konami Code Activated!');
    }
});