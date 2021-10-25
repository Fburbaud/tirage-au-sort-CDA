//création du tableau de base avec la liste des stagiaires
var students = ["Salah", "Bertrand", "Yann", "Fred", "Chaima", "Quentin", "Aisha","Julien", "Sophie", "Jeyapriya", "Shabina", "Djamel", "Philippe"]

//initialisation d'un tableau vide qui va servir à la récupération de l'élément sortant lors du random 
var pickedStudents = [];

//initialisation du bouton de lancer
var btnlancer = document.querySelector("#lancer");

//écriture du tableau sous forme de liste espacée d'un " " dans l'espace dédié sur la page html
document.querySelector("#tableauInital").innerHTML = students.join(" ");

//création de la fonction de tirage au sort sur l'ensemble du tableau
function doRandom(tableau) {
    return tableau[Math.floor(Math.random()*tableau.length)];
}

//création de la fonction qui permet de faire sortir la donnée du tableau tirée au sort (indice) en la coupant
//du tableau d'origine et en l'ajoutant dans le tableau vide
function sortie(tableau, indice, tableau2) {
    for (var i = 0; i < tableau.length; i++) {
        if(tableau[tableau.indexOf(indice)] == tableau[i]){
            tableau.splice(tableau.indexOf(indice),1);
            tableau2.push(indice)
        }
    }
    return indice;
}
//création d'une fonction permettant de désactiver le bouton lancer quand le tableau de base est vide.
function stopTirage(tableau) {
    if(tableau.length == 0){
        btnlancer.style.display = "none";
    }
}

//création de l'évènement: quand on clique sur le bouton "lancer", le compte à rebours de 3sec s'enclenche
//et à sa fin (clearInterval) on annonce la personne tirée au sort, on met à jour le tableau de base,
//et on affiche les personnes déjà tirées au sort avec le tableau vide sous forme de liste espacée de " ".
btnlancer.addEventListener("click", function(){
        var timeleft = 3;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("resultat").innerHTML = sortie(students, doRandom(students), pickedStudents);
            stopTirage(students);
            document.querySelector("#tableauInital").innerHTML = students.join(" ");
            document.querySelector("#pickedStudents").innerHTML = "Stagiaire(s) pouvant se reposer: "+pickedStudents.join(" ");
        } else {
            document.getElementById("resultat").innerHTML = timeleft;
        }
        timeleft -= 1;
        }, 1000);
        console.log(students);
});
