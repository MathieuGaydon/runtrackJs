$(document).ready(function() {
    const emptyTile = $('.empty-tile');
    let stepCount = 0;

    // Fonction pour mélanger les carreaux
    function shuffleTiles() {
        const tiles = $('#game-grid .tile').toArray();
        // Mélange aléatoire des carreaux
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            $(tiles[i]).before(tiles[j]);
        }
        updateGrid();
    }

    // Met à jour la position de la grille après chaque mouvement
    function updateGrid() {
        $('#game-grid .tile').each(function(index) {
            $(this).attr('data-index', index);
        });
    }

    // Déplace un carreau vers la case vide
    function moveTile(tile) {
        const emptyTilePosition = emptyTile.index();
        const tilePosition = $(tile).index();

        // Vérifie si la case vide est adjacente au carreau sélectionné
        const adjacentPositions = [emptyTilePosition - 1, emptyTilePosition + 1, emptyTilePosition - 3, emptyTilePosition + 3];
        if (adjacentPositions.includes(tilePosition)) {
            // Échange les positions
            $(emptyTile).before(tile);
            stepCount++;
            $('#step-count').text('Étapes : ' + stepCount);
            checkWin();
        }
    }

    // Vérifie si le joueur a gagné
    function checkWin() {
        let isWin = true;
        $('#game-grid .tile').each(function(index) {
            const id = $(this).attr('id');
            const correctId = 'logo' + (index + 1);
            if (id && id !== correctId) {
                isWin = false;
            }
        });

        if (isWin) {
            $('#win-message').text('Vous avez gagné !').show();
            $('#restart-button').show();
        }
    }

    // Redémarre le jeu
    function restartGame() {
        $('#game-grid .tile').not('.empty-tile').each(function() {
            const tileId = $(this).attr('id').replace('logo', '');
            $(this).html('<img src="images/logo' + tileId + '.png" alt="Logo">');
        });
        $('#win-message').hide();
        $('#restart-button').hide();
        $('#step-count').text('Étapes : 0');
        stepCount = 0;
        shuffleTiles();
    }

    // Ajout des événements de clic pour les carreaux
    $('#game-grid .tile').not('.empty-tile').click(function() {
        moveTile(this);
    });

    // Gestion du bouton "Recommencer"
    $('#restart-button').click(function() {
        restartGame();
    });

    // Initialisation du jeu avec un mélange des carreaux
    shuffleTiles();
});
