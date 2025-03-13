const textarea = document.createElement('textarea');
textarea.id = 'keylogger';
document.body.appendChild(textarea);

document.addEventListener('keydown', (event) => {
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            textarea.value += event.key ;
        } else {
            textarea.value += event.key;
        }
    }
});
