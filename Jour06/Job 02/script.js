document.addEventListener('DOMContentLoaded', function() {
    const boutonPapillon = document.getElementById('boutonPapillon');
    boutonPapillon.addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('confirmPapillonModal'));
        modal.show();
    });
});

// jumbotron
// Liste de citations
const citations = [
    "Vivre dans la peur est douloureux, n'est-ce pas ?",
    "Plus humain qu'humain est notre devise.",
    "Aimez-vous notre hibou ?",
    "J'ai vu des choses que vous ne pourriez pas croire.",
    "Tous ces moments seront perdus dans le temps, comme des larmes dans la pluie.",
    "Les anges ont brûlé. Le tonnerre a roulé autour de leurs épaules... brûlant avec les feux d'Orc.",
    "J'étais parti quand je suis entré ici, Bryant.",
];

// Liste de contenus pour les pages
const pageContents = [
    {
        text1: "Le monde est la matière, l’espace et les phénomènes accessibles par les sens, l’expérience ou la raison.",
        text2: "Le sens courant désigne notre planète, la Terre, ses habitants et son environnement.",
        text3: "Le sens étendu désigne l’univers dans son ensemble.",
    },
    {
        text1: "La page 2 est très intéressante.",
        text2: "Elle contient des informations utiles.",
        text3: "Et des liens vers d'autres pages.",
    },
    {
        text1: "La page 3 est la dernière.",
        text2: "Elle résume tout ce que vous avez appris.",
        text3: "Et vous donne des conseils pour la suite.",
    }
];

// Sélectionner les liens de pagination
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

// Sélectionner le bouton "Rebooter le Monde"
const rebootButton = document.getElementById('rebootButton');

// Sélectionner les éléments à modifier
const phraseToChange = document.getElementById('phraseToChange');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

// Fonction pour afficher une citation aléatoire
function afficherCitationAleatoire() {
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    phraseToChange.textContent = citationAleatoire;
}

// Fonctions pour modifier les textes en fonction de la page
function page1Content() {
    phraseToChange.textContent = "Il existe plusieurs visions du terme :";
    text1.textContent = pageContents[0].text1;
    text2.textContent = pageContents[0].text2;
    text3.textContent = pageContents[0].text3;
}

function page2Content() {
    phraseToChange.textContent = "Il existe plusieurs visions du terme :";
    text1.textContent = pageContents[1].text1;
    text2.textContent = pageContents[1].text2;
    text3.textContent = pageContents[1].text3;
}

function page3Content() {
    phraseToChange.textContent = "Il existe plusieurs visions du terme :";
    text1.textContent = pageContents[2].text1;
    text2.textContent = pageContents[2].text2;
    text3.textContent = pageContents[2].text3;
}

// Ajouter des événements click aux liens de pagination
page1.addEventListener('click', function(event) {
    event.preventDefault();
    page1Content();
});

page2.addEventListener('click', function(event) {
    event.preventDefault();
    page2Content();
});

page3.addEventListener('click', function(event) {
    event.preventDefault();
    page3Content();
});

// Ajouter un événement click au bouton "Rebooter le Monde"
rebootButton.addEventListener('click', afficherCitationAleatoire);


// Sélectionner la liste groupée
const listGroup = document.getElementById('listGroup');

// Ajouter un événement click sur chaque élément de la liste
listGroup.addEventListener('click', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        // Supprimer la classe active de tous les éléments
        const activeItems = listGroup.querySelectorAll('.active');
        activeItems.forEach(item => item.classList.remove('active'));

        // Ajouter la classe active à l'élément cliqué
        event.target.classList.add('active');
    }
});


// Sélectionner les boutons et la barre de progression
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');

// Fonction pour régresser la barre de progression
function regressProgress() {
    const currentWidth = parseInt(progressBar.style.width.replace('%', ''));
    if (currentWidth > 0) {
        progressBar.style.width = `${currentWidth - 10}%`;
    }
}

// Fonction pour faire progresser la barre de progression
function progressProgress() {
    const currentWidth = parseInt(progressBar.style.width.replace('%', ''));
    if (currentWidth < 100) {
        progressBar.style.width = `${currentWidth + 10}%`;
    }
}

// Ajouter des événements click aux boutons
prevButton.addEventListener('click', regressProgress);
nextButton.addEventListener('click', progressProgress);





// Sélectionner les champs du formulaire
const loginField = document.querySelector('input[placeholder="Login"]');
const passwordField = document.querySelector('input[placeholder="Mot de Passe"]');
const dogeCoinField = document.querySelector('input[type="text"]:not([placeholder])');
const urlField = document.querySelector('input[type="text"]:last-child');

// Variable pour stocker la séquence de touches
let keySequence = 'D, G, C';

// Fonction pour afficher une alerte avec les informations du formulaire
function showAlert() {
    const alertMessage = `
        Login: ${loginField.value || 'Non renseigné'}
        Mot de Passe: ${passwordField.value || 'Non renseigné'}
        DogeCoin: ${dogeCoinField.value || 'Non renseigné'}
        URL: ${urlField.value || 'Non renseigné'}
    `;
    alert(alertMessage);
}

// Fonction pour gérer les événements de pression sur le clavier
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'd' || event.key.toLowerCase() === 'g' || event.key.toLowerCase() === 'c') {
        keySequence += event.key.toLowerCase();
        if (keySequence === 'dgc') {
            showAlert();
            keySequence = ''; // Réinitialiser la séquence après affichage
        }
    } else {
        keySequence = ''; // Réinitialiser si une touche incorrecte est pressée
    }
});





// Sélectionner le formulaire et le spinner
const form = document.getElementById('myForm');
const spinner = document.querySelector('.spinner-border');

// Tableau de couleurs
const colors = ['#FF69B4', '#33CC33', '#6666FF']; // Rose, Vert, Bleu
let colorIndex = 0;

// Fonction pour gérer la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission réelle du formulaire

    // Sélectionner les champs email et mot de passe
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password2');

    // Valider les champs
    if (emailField.value !== '' && passwordField.value !== '') {
        // Changer la couleur du spinner
        spinner.style.borderTopColor = colors[colorIndex];
        spinner.style.borderRightColor = colors[colorIndex];
        spinner.style.borderBottomColor = colors[colorIndex];
        spinner.style.borderLeftColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Incrémentation circulaire
        console.log('Formulaire soumis avec succès !');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});







