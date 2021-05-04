
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
    "a brulé",
    "a surgit"
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
const bouton = document.getElementById('validation');
const reset = document.getElementById('reset');
const action = () => {
    const valeur = document.getElementById('nb').value;
    let divResultat = document.getElementById('resulat');
    divResultat.innerHTML += `<h2> Mes ${valeur} excuses</h2>`;

    for(let i=0; i<10; i++){
        divResultat.innerHTML += `<p> <span>${i+1}</span>  ${phrase(partieUn, partieDeux, partieTrois)}</p>`;
        console.log("Désolé mais " + phrase(partieUn, partieDeux, partieTrois));
    }
}

bouton.addEventListener("click", action);
reset.addEventListener("click",() => {
    let divResultat = document.getElementById('resulat');
    divResultat.innerHTML = ""
})
