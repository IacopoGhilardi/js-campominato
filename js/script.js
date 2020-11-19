// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var randomArr = [];

//genero 16 numeri random
for (var i = 0; i < 16; i++) {
    var random = randomNumber(1, 100)

    while (randomArr.indexOf(random) != -1) {
        random = randomNumber(1, 100);
    }
    randomArr.push(random);
}