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




var randomArr = arrGenerator(16);
var userArr = [];



console.log(randomArr);

numbers = 100 - randomArr.length;
console.log(numbers);

score = game(4, randomArr);


score == numbers ? alert("Congratulazioni hai vinto") : alert("Mi dispiace hai perso, il tuo punteggio è: " + score);
console.log(score);


//  FUNCTION
//--------------------------------------------------------------------------



//creo la funzione che mi generi un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//includes function
// function isIncludesInArray(arg, arr) {
//
//     for(var k = 0; k < arr.length; k++) {
//         if (arr[k] == arg) {
//             return true;
//         } else return false;
//     }
// }


// genero 16 numeri random senza duplicati
function arrGenerator(maxLength) {

    var arr = [];

    for (var i = 0; i < maxLength; i++) {
        var arg = randomNumber(1, 100);
    
        while (arr.includes(arg)) {
            arg = randomNumber(1, 100);
        }
        arr.push(arg);
    }

    return arr;
}

// function arrGenerator(maxLength, func) {

//     var arr = [];

//     for (var i = 0; i < maxLength; i++) {
//         var arg = func();
    
//         while (arr.includes(arg)) {
//             alert('Non puoi inserire due numeri uguali');
//             arg = func();
//         }
//         arr.push(arg);
//     }

//     return arr;

// }



//funzione che esegue il gioco
function game(maxNum, arr) {

    var count = 0;
    var userInput = parseInt(prompt("Un numero da 1 a 100"));
    var userArray = [];


    while(count < maxNum && !arr.includes(userInput)) {

        if (userArray.includes(userInput)) {
            alert('Non puoi inserire due numeri uguali');
            userInput = parseInt(prompt("Inserisci un numero da 1 a 100"));
        } else {
            userArray.push(userInput);
            count++;
            console.log(count);
            userInput = parseInt(prompt("Un altro numero da 1 a 100"));
        }
    }
    
    return count;
}
