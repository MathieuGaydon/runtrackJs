$(document).ready(function () {
    // Charger les données utilisateurs depuis le fichier JSON
    $.getJSON('data/data.json', function (data) {

        $('#loginForm').submit(function (e) {
            e.preventDefault();

            const email = $('#email').val();
            const password = $('#password').val();

            // Chercher un utilisateur correspondant dans les données
            const user = data.find(user => user.email === email && user.password === password);

            if (user) {
                console.log(`Utilisateur trouvé : ${user.email}`); // Pour vérifier si l'utilisateur est trouvé
                // Si l'utilisateur est trouvé, stocker son rôle dans le sessionStorage
                sessionStorage.setItem('userRole', user.role);

                // Debug pour vérifier si on passe correctement la redirection
                console.log(`Rôle de l'utilisateur : ${user.role}`);

                // Rediriger vers calendar.html après la connexion
                window.location.href = 'calendar.html'; 

            } else {
                alert('Email ou mot de passe incorrect');
            }
        });
    });
});
