$(document).ready(function() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Mettre l'heure à 00:00:00 pour éviter les différences d'heure

    const currentMonth = today.getMonth(); // Mois actuel (0 - 11)
    const currentYear = today.getFullYear(); // Année actuelle
    const reservedDates = []; // Tableau pour les dates réservées

    // Fonction pour générer le calendrier
    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        // Nombre de jours dans le mois
        const numDays = lastDay.getDate();

        // Premier jour du mois (jour de la semaine)
        const startDay = firstDay.getDay();

        // Table pour afficher les jours du mois
        let calendarHtml = '<table class="table table-bordered">';
        calendarHtml += '<thead><tr>';
        calendarHtml += '<th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th>';
        calendarHtml += '</tr></thead><tbody>';

        let day = 1;
        for (let row = 0; row < 6; row++) { // 6 rangées max (5-6 rangées selon le mois)
            calendarHtml += '<tr>';
            for (let col = 0; col < 7; col++) {
                if (row === 0 && col < startDay) {
                    // Cellules vides avant le premier jour du mois
                    calendarHtml += '<td></td>';
                } else if (day <= numDays) {
                    const currentDate = new Date(year, month, day);
                    const dateString = currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD

                    // Vérifier si la date est réservée ou non
                    let cellClass = '';
                    if (reservedDates.includes(dateString)) {
                        cellClass = 'reserved'; // Date réservée
                    } else if (currentDate < today) {
                        cellClass = 'text-muted'; // Date passée (non cliquable)
                    } else {
                        cellClass = 'available'; // Date disponible
                    }

                    // Mettre en surbrillance le jour actuel
                    if (currentDate.toDateString() === today.toDateString()) {
                        cellClass += ' today'; // Date d'aujourd'hui
                    }

                    calendarHtml += `<td class="${cellClass}" data-date="${dateString}">${day}</td>`;
                    day++;
                } else {
                    calendarHtml += '<td></td>'; // Cellules vides après le dernier jour du mois
                }
            }
            calendarHtml += '</tr>';
        }

        calendarHtml += '</tbody></table>';
        $('#calendar').html(calendarHtml); // Afficher le calendrier
    }

    // Gérer le clic sur une date
    $(document).on('click', 'td.available, td.reserved', function() {
        const selectedDate = $(this).data('date');

        // Si la date est réservée, annule la réservation
        if (reservedDates.includes(selectedDate)) {
            const index = reservedDates.indexOf(selectedDate);
            reservedDates.splice(index, 1); // Supprimer la date réservée
            $(this).removeClass('reserved').addClass('available');
            alert(`La réservation pour le ${selectedDate} a été annulée.`);
        } else if ($(this).hasClass('available') || $(this).hasClass('today')) {
            // Sinon, réserve la date
            reservedDates.push(selectedDate);
            $(this).removeClass('available').removeClass('today').addClass('reserved');
            alert(`La date ${selectedDate} a été réservée.`);
        }
    });

    // Générer le calendrier du mois actuel
    generateCalendar(currentMonth, currentYear);
});
