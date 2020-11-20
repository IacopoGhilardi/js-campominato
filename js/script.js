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





var randomArr = randomArrGenerator(16);

console.log(randomArr);

numbers = 100 - randomArr.length;

var difficult = prompt("Seleziona la difficoltà tra 0, 1 o 2");

switch (difficult) {
        case "0":
                score = play(4, randomArr);
                break;
        case "1":
                score = play(5, randomArr);
                break;
        case "2":
                score = play(6, randomArr);
                break;
        default:
                score = play(4, randomArr);
                break;
    
}



score == 4 ? alert("Congratulazioni hai vinto il tuo punteggio è " + score) : alert("Mi dispiace hai perso, il tuo punteggio è: " + score);







//  FUNCTION
//--------------------------------------------------------------------------

//creo la funzione che mi generi un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//includes function
// function isIncludesInArray(arg, arr) {
//      var include = false
//     for(var k = 0; k < arr.length; k++) {
//         if (arr[k] == arg) {
//             include = true;
//         }
//     }
//      return include;
// }


// genero 16 numeri random senza duplicati
function randomArrGenerator(maxLength) {
    var arr = [];

    while(arr.length < maxLength) {
        var arg = randomNumber(1, 100);
    
        if (!arr.includes(arg)) {
            arr.push(arg);
        }
    }
    return arr;

}


//funzione che esegue il gioco
function play(maxNum, arr) {

    var count = 0;
    var userArray = [];
    var userInput = parseInt(prompt("Un numero da 1 a 100"));

    while(userArray.length < maxNum && !arr.includes(userInput)) {
               
           if (!userArray.includes(userInput)) {
            userArray.push(userInput);
            count++;
            userInput = parseInt(prompt("Un numero da 1 a 100"));
        } else {
            alert ("Non puoi inserire due numeri uguali, riprova");
            userInput = parseInt(prompt("Un numero da 1 a 100"));
        }
    }
    
    return count;
}
