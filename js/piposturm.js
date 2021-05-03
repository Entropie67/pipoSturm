console.log("###  PipoSturm");
amour = [
    "Sous l'égide de Jupiter, le climat conjugal sera marqué de gentillesse, de compréhension, de joie de vivre et d'amours délicates imprégnées de gaieté, de désir de se retrouver à deux sur la même longueur d'onde. Célibataire, vous pourriez, par le biais de votre travail, faire des rencontres qui vous contraindront à modifier certains projets.",
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

argent = [
    "Vos économies risquent de fondre comme neige au soleil si vous cédez à vos impulsions amplifiées par Pluton.",
    "lance",
    "sauve"
];

sante = [
    "Vous aurez peut-être besoin de vous gâter un peu sur le plan alimentaire pour vous remonter le moral. Eh bien, allez-y.",
    "un vélo",
    "un élève"
];
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Fonction qui génère un nombre aléatoire entre deux bornes.
const aleatoireNombre = (min, max) => Math.floor(Math.random() * (max - min) + min);

const aleatoirePhrase = (partieUn, partieDeux, partieTrois) => {   
    phrase = [partieUn[aleatoireNombre(0, partieUn.length - 1)], partieDeux[aleatoireNombre(0, partieDeux.length - 1)], partieTrois[aleatoireNombre(0, partieTrois.length - 1)]];
    return phrase;
};

const plusieursPhrases = n => {
    for(let i=0; i<n; i++){
        console.log(aleatoirePhrase(amour, sante, argent));
    }
};

plusieursPhrases(5);

const getSelectValue = (selectId) => {
  let selectElmt = document.getElementById(selectId);
    /**
     selectElmt.options correspond au tableau des balises <option> du select
     selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
     */
  return selectElmt.options[selectElmt.selectedIndex].value;
}
const validation = document.getElementById("validation");
const action = () => {
    let signe = getSelectValue("signe");
    let reponse = document.getElementById("reponse");
    rep = aleatoirePhrase(amour, sante, argent)
    reponse.innerHTML += `<h2> ${signe}</h2>`;
    reponse.innerHTML += `<h3> Amour</h3>`;
    reponse.innerHTML += `<p> ${rep[0]}</p>`;
    reponse.innerHTML += `<h3> Argent</h3>`;
    reponse.innerHTML += `<p> ${rep[1]}</p>`;
    reponse.innerHTML += `<h3> Santé</h3>`;
    reponse.innerHTML += `<p> ${rep[2]}</p>`;
}
validation.addEventListener('click', action);



