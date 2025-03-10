function jourTravaille(date) {

    let joursFeries = [
        new Date('2024-01-01'),
        new Date('2024-04-01'), 
        new Date('2024-05-01'),
        new Date('2024-05-08'),
        new Date('2024-05-09'),
        new Date('2024-05-20'), 
        new Date('2024-07-14'),
        new Date('2024-08-15'), 
        new Date('2024-11-01'),
        new Date('2024-11-11'),
        new Date('2024-12-25'), 
    ];
    if (joursFeries.some(jour => jour.getTime() === date.getTime())) {
        console.log(`Le ${date.getDate()} ${getMois(date.getMonth())} ${date.getFullYear()} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, le ${date.getDate()} ${getMois(date.getMonth())} ${date.getFullYear()} est un week-end`);
    } else {
        console.log(`Oui, le ${date.getDate()} ${getMois(date.getMonth())} ${date.getFullYear()} est un jour travaillé`);
    }
}
function getMois(mois) {
    let moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    return moisNom[mois];
}
let date1 = new Date('2024-12-24');
let date2 = new Date('2024-04-02');
let date3 = new Date('2024-07-07');
jourTravaille(date1 );
jourTravaille(date2 );
jourTravaille(date3 );
