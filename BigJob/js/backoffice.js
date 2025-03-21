$(document).ready(function () {
    // Vérifier si l'utilisateur est un admin ou un modérateur
    const userRole = sessionStorage.getItem('userRole');
    if (userRole !== 'admin' && userRole !== 'moderator') {
        alert('Vous n\'avez pas les droits pour accéder à cette page.');
        window.location.href = 'calendar.html'; // Rediriger vers le calendrier si l'utilisateur n'est ni admin ni modérateur
    }

    // Simuler les réservations dans le backoffice
    const reservations = [
        { name: 'John Doe', date: '2025-03-01' },
        { name: 'Jane Smith', date: '2025-03-02' }
    ];

    // Ajouter les réservations dans la table
    reservations.forEach(reservation => {
        $('#reservationList').append(`
            <tr>
                <td>${reservation.name}</td>
                <td>${reservation.date}</td>
                <td>
                    <button class="btn btn-success">Accepter</button>
                    <button class="btn btn-danger">Refuser</button>
                </td>
            </tr>
        `);
    });
});
