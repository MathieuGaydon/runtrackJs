document.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const red = Math.min(255, Math.floor((scrollPercent / 100) * 255));
    const green = Math.min(255, Math.floor((100 - scrollPercent) / 100 * 255));
    const blue = 0;

    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});