function bisextile(annee) {
    return ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0));
}
let annee = 2024;
console.log(bisextile(annee));