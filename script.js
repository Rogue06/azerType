// Liste des mots utilisés pour le jeu 
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0


for(let i = 0; i < listeMots.length; i++) {
    let inputUser = prompt("Entrez le mot " +listeMots[i])
    if(inputUser === listeMots[i]) {
        score++
    }
}

console.log("Votre score est de : " + score + " sur " + listeMots.length);


function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}


let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)