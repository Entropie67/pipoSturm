
const partieUn = [
    "Un chien",
    "Un alien",
    "Un mec de Kleber",
    "Un individu cagoulé",
    "Un cygne"
]

const partieDeux = [
    "a percuté",
    "a volé",
    "a mangé",
    "a detruit",
    "a brulé"
]
const partieTrois = [
    "mon tram",
    "mon devoir",
    "mon sac",
    "mon ordinateur",
    "ma connexion"
]

const nombreAleatoire = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const phrase = (a, b, c) => `${a[nombreAleatoire(0, a.length)]} ${b[nombreAleatoire(0, b.length)]} ${c[nombreAleatoire(0, c.length)]}`;

for(let i=0; i<10; i++){
    console.log("Désolé mais " + phrase(partieUn, partieDeux, partieTrois));
}