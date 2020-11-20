// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50






var maxNumber;
var difficult = prompt("Seleziona la difficoltà tra 0, 1 o 2");

switch (difficult) {
        case "1":
            maxNumber = 80;
                break;
        case "2":
            maxNumber = 50;
                break;
        default:
            maxNumber = 100;
                break;
    
}

var bombs = randomArrGenerator(16);
console.log(bombs);
var attempts = [];
var maxAttempts;
maxAttempts = maxNumber - bombs.length;
var score = 0;


//gioco
var gameOver = false;
while(attempts.length < maxAttempts && gameOver == false) {

    var userInput = parseInt(prompt("Inserisci un numero da 1 e " + maxNumber));

    if (checkIfExistInArray(userInput, bombs)) {
        gameOver = true;
    } else if (!checkIfExistInArray(userInput, attempts) && userInput <= maxNumber && userInput > 0) {
        score++;
        attempts.push(userInput);
    } else {
        alert("Non puoi inserire due numeri uguali, riprova o un numero superiore al massimo richiesto");
    }

}

score == maxAttempts ? alert("hai vinto, punteggio: " + score) : alert("hai perso, punteggio: " + score);








//  FUNCTION
//--------------------------------------------------------------------------

//creo la funzione che mi generi un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



//includes function
function checkIfExistInArray(arg, arr) {
     var include = false
    for(var k = 0; k < arr.length; k++) {
        if (arr[k] == arg) {
            include = true;
        }
    }
     return include;
}


// genero 16 numeri random senza duplicati
function randomArrGenerator(maxLength) {
    var arr = [];

    while(arr.length < maxLength) {
        var arg = randomNumber(1, maxNumber);
    
        if (!checkIfExistInArray(arg, arr)) {
            arr.push(arg);
        }
    }
    return arr;

}