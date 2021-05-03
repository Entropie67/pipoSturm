console.log("###  PipoSturm");
partieUn = [
    "La pédagogie individualisée",
    "Les pratiques innovantes",
    "La transmission des valeurs",
    "L'analyse de pratiques",
    "Les technologies numériques",
    "L'investissement des enseignants",
    "L'expertise pédagogique",
    "La formation continue des enseignants",
    "Le processus d'évaluation",
    "L'ouverture au monde",
    "La mise en situation des élèves",
    "L'interdisciplinarité",
    "La refondation de l'école"

];

partieDeux = [
    "mange",
    "lance",
    "sauve"
];

partieTrois = [
    "une crevette",
    "un vélo",
    "un élève"
];
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Fonction qui génère un nombre aléatoire entre deux bornes.
const aleatoireNombre = (min, max) => Math.floor(Math.random() * (max - min) + min);

const aleatoirePhrase = (partieUn, partieDeux, partieTrois) => {   
    phrase = `${partieUn[aleatoireNombre(0, partieUn.length - 1)]} ${partieDeux[aleatoireNombre(0, partieDeux.length - 1)]} ${partieTrois[aleatoireNombre(0, partieTrois.length - 1)]}`;
    return phrase;
};

const plusieursPhrases = n => {
    for(let i=0; i<n; i++){
        console.log(aleatoirePhrase(partieUn, partieDeux, partieTrois));
    }
};

plusieursPhrases(5);

