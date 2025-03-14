document.getElementById('inscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Réinitialiser les messages d'erreur
    document.getElementById('nomError').innerText = '';
    document.getElementById('prenomError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('adresseError').innerText = '';
    document.getElementById('codePostalError').innerText = '';

    let valid = true;

    // Vérification des champs
    const nom = document.getElementById('nom').value;
    if (nom.length < 2) {
        document.getElementById('nomError').innerText = 'Le nom est trop court.';
        valid = false;
    }

    const prenom = document.getElementById('prenom').value;
    if (prenom.length < 2) {
        document.getElementById('prenomError').innerText = 'Le prénom est trop court.';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        document.getElementById('emailError').innerText = 'L\'email n\'est pas valide.';
        valid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Le mot de passe doit avoir au moins 6 caractères.';
        valid = false;
    }

    const adresse = document.getElementById('adresse').value;
    if (adresse.length < 5) {
        document.getElementById('adresseError').innerText = 'L\'adresse est trop courte.';
        valid = false;
    }

    const codePostal = document.getElementById('codePostal').value;
    const codePostalRegex = /^[0-9]{5}$/;
    if (!codePostal.match(codePostalRegex)) {
        document.getElementById('codePostalError').innerText = 'Le code postal doit comporter 5 chiffres.';
        valid = false;
    }

    if (valid) {
        alert("Inscription réussie !");
    }
});