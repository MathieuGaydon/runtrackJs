document.addEventListener("DOMContentLoaded", function () {
  // Vérification de la connexion
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      alert("Vous devez être connecté pour accéder à cette page.");
      window.location.href = "login.html";  // Rediriger vers la page de connexion
  } else {
      // Afficher le calendrier ou d'autres fonctionnalités si l'utilisateur est connecté
      console.log("Utilisateur connecté :", loggedInUser);

      // Code pour afficher le calendrier et permettre de choisir des dates
  }
});
