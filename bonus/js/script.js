
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var play = document.getElementById('play');
var cellBox = document.getElementById('cell-box');
var cssScore = document.getElementById('score');
var maxNumber;
var bombs;
var maxAttempts;
var attempts = [];
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

    document.getElementById('title').style.marginTop = '0px';
    document.getElementById('title').style.transition = 'all .5s'

    if (clicked == false) {
        document.querySelector  
        createBoard();
        clicked = true;
    } else {
        resetBoard();
        bombs = randomArrGenerator(16);
        console.log(bombs);
        createBoard();
    }
    
    
    //aggiungo alle celle l'evento sul click
    
});


//gestisco il click delle celle




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
    //creo un numero di caselle uguale ai numeri da giocare
    for (var i = 0; i < maxNumber; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('id', (i + 1));
        cell.setAttribute('class', 'cell' )
        cellBox.appendChild(cell);
        cell.innerHTML = "<span>" + (i + 1) + "</span>";

        cell.addEventListener('click', function(){
            if (cell.classList.contains('bomb')){
                console.log('game over');
            }

        })
    }

    //metto nel campo le bombe
    for (var k = 0; k < bombs.length; k++) {
        var bomb = "<img src=\"https://i.gifer.com/MZa6.gif\" alt=\"\"></img>";
        document.getElementById(bombs[k]).innerHTML += bomb;
        document.getElementById(bombs[k]).classList.add('bomb');
    }
}

//cancello la board, reset
function resetBoard() {
    cellBox.innerHTML = "";
}

//seleziono difficoltà
function difficultSelected(maxNumber) {
    this.maxNumber = maxNumber;
    bombs = randomArrGenerator(16);
    play.style.opacity = '1';
    cssScore.style.opacity = '1';
    resetBoard();
    cellBox.style.height = 'calc(70px * 5)';
    maxAttempts = maxNumber - bombs.length;
    console.log(bombs);
}
