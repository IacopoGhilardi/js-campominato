var play = document.getElementById('play');
var cellBox = document.getElementById('cell-box');
var clicked = false;


play.addEventListener('click', function(){

    
    
    if (clicked == false) {
        for (var i = 0; i < maxNumber; i++) {
            cellBox.innerHTML +=
            "<div class=\"cell\" id=\"" + (i+ 1) +"\">"+ (i+1) + "</div>";
    }
    
        for (var i = 0; i < bombs.length; i++) {
            document.getElementById(bombs[i]).innerHTML += "<img src=\"https://i.gifer.com/MZa6.gif\" alt=\"\" class=\"bomb\"></img>"
        }


    clicked = true;
    } else if (clicked) {

        for (var i = 0; i < bombs.length; i++) {
            document.getElementById(bombs[i]).innerHTML = "<div class=\"cell\" id=\"" + (bombs[i]) +"\">"+ (bombs[i]) + "</div>";
        }

        bombs = randomArrGenerator(16);
        for (var i = 0; i < bombs.length; i++) {
            document.getElementById(bombs[i]).innerHTML += "<img src=\"https://i.gifer.com/MZa6.gif\" alt=\"\" class=\"bomb\"></img>"
        }
    }
    

    
});

//create cells





