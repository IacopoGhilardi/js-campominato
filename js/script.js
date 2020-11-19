// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//creo la funzione che mi generi un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//includes

// function isIncludesInArray(arg, arr) {

//     for(var k = 0; k < arr.length; k++) {
//         if (arr[k] = arg) {
//             return true;
//         } else return false;
//     }
// }


//genero 16 numeri random senza duplicati
function arrGenerator(arr, num) {

    for (var i = 0; i < num; i++) {
        var random = randomNumber(1, 100);
    
        while (arr.includes(random)) {
            random = randomNumber(1, 100);
        }
        arr.push(random);
    }

}


//funzione che esegue il gioco
function game(maxNum, arr) {

    var count = 0;
    var userInput = parseInt(prompt("Un numero da 1 a 100"));

    while (count < maxNum && (!arr.includes(userInput))) {
        count++;
        console.log(count);
        userInput = parseInt(prompt("Un numero da 1 a 100"));
    }
    
    return count;
}

//--------------------------------------------------------------------------

var randomArr = [];

arrGenerator(randomArr, 16);

console.log(randomArr);

numbers = 100 - randomArr.length;
console.log(numbers);

console.log(game(4, randomArr));