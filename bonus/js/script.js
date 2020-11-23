
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var play = document.getElementById('play');
var cellBox = document.getElementById('cell-box');
var scoreBox = document.querySelector('.score');
var riprova = document.getElementById('riprova');
var vittoria = document.getElementById('vittoria');
var maxNumber;
var bombs;
var maxAttempts;
var attempts = [];
var cells = [];
var score = 0;
var cell;


//gestisco il click sui pulsante per la difficoltà
easy.addEventListener('click', function() {
    difficultSelected(100);
});

medium.addEventListener('click', function() {
    difficultSelected(80);
});

hard.addEventListener('click', function() {
    difficultSelected(50);
});




//gestisco il click sul pulsante play
var clicked = false;
play.addEventListener('click', function() {

    maxAttempts = maxNumber - bombs.length;
    console.log(maxAttempts);

    document.getElementById('title').style.marginTop = '0px';
    document.getElementById('title').style.transition = 'all .5s'

    if (clicked == false) {
        document.querySelector  
        createBoard();
        clicked = true;
    } else {
        resetBoard();
        bombs = randomArrGenerator(16);
        // console.log(bombs);
        createBoard();
    }

});

//Pulsante riprova quando perdi
riprova.addEventListener('click', function(){
    resetBoard();
    bombs = randomArrGenerator(16);
    // console.log(bombs);
    createBoard();
    document.querySelector('#lose').style.display = 'none';
});


//Pulsante riprova quando vinci
vittoria.addEventListener('click', function(){
    resetBoard();
    bombs = randomArrGenerator(16);
    // console.log(bombs);
    createBoard();
    document.querySelector('#vittoria').style.display = 'none';
});



//function
//-------------------------------------------------------------------

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

// funzione per creare il campo di gioco
function createBoard() {
    // creo un numero di caselle uguale ai numeri da giocare
    for (var i = 1; i <= maxNumber; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('id', (i));
        cell.setAttribute('class', 'cell');
        cellBox.appendChild(cell);
        cell.innerHTML = "<span>" + (i) + "</span>";

        //metto le bombe nella board se corrispondono
        // if (bombs.includes(i)) {
        //     document.getElementById(i).classList.add('bomb');
        // }

        cell.addEventListener('click', checked(i), false);
    }

}

//invoco la funzione ad ogni click
function checked(id) {
    return function(){
        click(id);
    }
}


//gestisco il click su una casella
function click(id) {
    var cell = id;
        if (!attempts.includes(cell)) {

            if(bombs.includes(cell)){
                //se al click su una casella si trova una bomba
                   
                    document.querySelector('#lose').style.display = 'block';
                    document.querySelector('#lose').style.transform = 'scale(6)';
                    document.querySelector('#lose').style.zIndex = '22';
                    document.querySelector('#lose').style.transition = 'all 0.5s';
                    document.querySelector('#lose span').innerHTML = 'Hai perso con un punteggio di: ' + score;
                    resetBoard();
                    // resetBoard();
                    attempts = [];
        } else {
            score++;
            document.getElementById('score').innerHTML = score;
            attempts.push(cell);
            document.getElementById(cell).style.background = 'red';
            if (score == (maxAttempts)) {
                document.getElementById('win').innerHTML += '<span>Hai vinto</span>';
                document.querySelector('#win').style.display = 'block';
                document.querySelector('#win').style.transform = 'scale(5)';
                document.querySelector('#win').style.zIndex = '22';
                document.querySelector('#win').style.transition = 'all 0.5s';
                document.querySelector('#win').style.color = 'white';
                resetBoard();
            }
        }


    } else {
        alert('Gia selezionato');
    }

}

//cancello la board, reset
function resetBoard() {
    cellBox.innerHTML = "";
    score = 0;
    document.getElementById('score').innerHTML = 0;
}

//seleziono difficoltà
function difficultSelected(maxNumber) {
    this.maxNumber = maxNumber;
    bombs = randomArrGenerator(16);
    play.style.opacity = '1';
    scoreBox.style.opacity = '1';
    resetBoard();
    cellBox.style.height = 'calc(70px * 5)';
    maxAttempts = maxNumber - bombs.length;
    // console.log(bombs);
    score = 0;
    document.getElementById('score').innerHTML = 0;
}
