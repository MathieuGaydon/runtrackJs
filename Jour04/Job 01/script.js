document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP ! statut: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('result').innerText = data;
        })
        .catch(error => console.error('Erreur :', error));
});
