// $(".fruit").attr('src', 'Images(Fruits)/' + fruits[Math.floor(16*Math.random())] + '.png');
// $(".fruit").show(); // show random fruit
// $(".fruit").css({'left': Math.round(610*Math.random()), 'top': -80}); //generate random position for fruits

// // generate a random step
// step = 1+Math.round(6*Math.random());

var trailsLeft;
var score;
var play = false;
var action;
var step;

var fruits = ["Apple", "Apple1", "Apple2", "Banana", "Grapes", "Guava", 
"Lemon", "Mango", "Mango1", "melon", "Musk", "Orange", "Pineapple", "RedF", 
"RedP", "Strawberry"];

$("document").ready(function() {

    $("#startGame").click(() => {
        if (play == true) {
            location.reload();
            // $("#gameOver").hide();
        }
        else {
            $("#gameOver").hide(); // Hide the Game Over box
            play = true;
            score = 0; //set initial score to 0
            $("#scoreVal").html(score);
            $(".container").fadeTo(1, 1);
            trailsLeft = 3;

            $("#trials").show();
            addHearts();
            $("#startGame").html("Reset Game");
            
            startAction();
        }
    });

    $("#fruit").mouseover(() => {
        score++;
        $("#scoreVal").html(score); // update the score   
        //$("#slicesound")[1].play();  
        document.getElementById("slicesound").play();
        // stop fruit
        clearInterval(action);
        $("#fruit").hide("explode", 500);

        // send new fruit
        setTimeout(startAction, 550);
        //startAction();
    });
    
    function startAction() {  
    
        $("#fruit").attr('src', 'Images(Fruits)/' + fruits[Math.floor(16*Math.random())] + '.png');
        $("#fruit").show(); // show random fruit
        $("#fruit").css({'left': Math.round(610*Math.random()), 'top': -80}); //generate random position for fruits
    
        // generate a random step
        step = 1+Math.round(6*Math.random());
        
        action = setInterval(function() {
    
            $("#fruit").css('top', $("#fruit").position().top + step);
    
            // check if the fruit is too low
            if ($("#fruit").position().top > $("#screen").height()) {
    
                if (trailsLeft > 1) {
                    $("#fruit").attr('src', 'Images(Fruits)/' + fruits[Math.floor(16*Math.random())] + '.png');
                    $("#fruit").show(); // show random fruit
                    $("#fruit").css({'left': Math.round(610*Math.random()), 'top': -80}); //generate random position for fruits
    
                    // generate a random step
                    step = 1+Math.round(6*Math.random());
    
                    trailsLeft--; // decrease the number of trials left by 1
                    addHearts();
                }
                else {  // Game Over
    
                    clearInterval(action);
                    $("#trials").hide();
    
                    $("#sval").html(score);
                    $("#gameOver").fadeTo(2000, 1);
                    $(".container").fadeTo(100, 0.4);
                    $("#startGame").html("Start Game");
    
                    play = false;
                }
            }

        }, 10);
    }

    function addHearts() {
        $("#trials").empty();
        for (i=1; i<=trailsLeft; i++) {
            $("#trials").append('<i class="fa fa-heart" style="font-size:28px;color:red;margin:3px"></i>');
        }
    }

});


