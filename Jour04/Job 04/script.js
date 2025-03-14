document.getElementById('update').addEventListener('click', () => {
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('user-table-body');
            tableBody.innerHTML = ''; 

            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
});
