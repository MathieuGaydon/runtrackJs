document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton'); // Récupère le bouton de déconnexion

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedUser');  // Supprimer les données de l'utilisateur connecté
        window.location.href = 'login.html';     // Rediriger vers la page de connexion
    });
});
