
const partieUn = [
    "Mesdames, Messieurs,",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que je me battrai pour faire admettre que",
    "Par ailleurs, c'est en toute connaissance de cause que je peux affirmer aujourd'hui que",
    "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
    "J'ai depuis longtemps (ai-je besoin de vous le rappeler ?) défendu l'idée que",
    "Et c'est en toute conscience que je déclare avec conviction que",
    "Et ce n'est certainement pas vous, mes chers compatriotes, qui me contredirez si je vous dis que"
]

const partieDeux = [
    "la conjoncture actuelle",
    "la situation d&#39;exclusion que certains d&#39;entre vous connaissent",
    "l&#39;acuité des problèmes de la vie quotidienne",
    "la volonté farouche de sortir notre pays de la crise",
    "l&#39;effort prioritaire en faveur du statut précaire des exclus",
    "le particularisme dû à notre histoire unique",
    "l&#39;aspiration plus que légitime de chacun au progrès social",
    "la nécessité de répondre à votre inquiétude journalière, que vous soyez jeunes ou âgés,"
]
const partieTrois = [
    "doit s'intégrer à la finalisation globale",
    "oblige à la prise en compte encore plus effective",
    "interpelle le citoyen que je suis et nous oblige tous à aller de l&#39;avant dans la voie",
    "a pour conséquence obligatoire l&#39;urgente nécessité",
    "conforte mon désir incontestable d&#39;aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les préoccupations de la population de base dans l&#39;élaboration",
    "entraîne une mission somme toute des plus exaltantes pour moi : l&#39;élaboration"
]
const partieQuatre = [
    "d'un processus allant vers plus d&#39;égalité.",
    "d'un avenir s&#39;orientant vers plus de progrès et plus de justice.",
    "d'une restructuration dans laquelle chacun pourra enfin retrouver sa dignité.",
    "d'une valorisation sans concession de nos caractères spécifiques.",
    "d'un plan correspondant véritablement aux exigences légitimes de chacun.",
    "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
    "d'un programme plus humain, plus fraternel et plus juste.",
    "d'un projet porteur de véritables espoirs, notamment pour les plus démunis."
]
const nombreAleatoire = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const phrase = (a, b, c, d) => `${a[nombreAleatoire(0, a.length)]} ${b[nombreAleatoire(0, b.length)]} ${c[nombreAleatoire(0, c.length)]} ${d[nombreAleatoire(0, d.length)]}`;

const bouton = document.getElementById('validation');
const reset = document.getElementById('reset');
const action = () => {
    const valeur = document.getElementById('nb').value;
    let divResultat = document.getElementById('resulat');
    divResultat.innerHTML += `<h2> Mes ${valeur} phrases</h2>`;

    for(let i=0; i<valeur; i++){
        divResultat.innerHTML += `<p> <span>${i+1}</span>  ${phrase(partieUn, partieDeux, partieTrois, partieQuatre)}</p>`;
        console.log("Désolé mais " + phrase(partieUn, partieDeux, partieTrois, partieQuatre));
    }
}

bouton.addEventListener("click", action);
reset.addEventListener("click",() => {
    let divResultat = document.getElementById('resulat');
    divResultat.innerHTML = ""
})
