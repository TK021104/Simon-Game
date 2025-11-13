var userClickedPattern=[];
var gamePattern=[];

var buttonColours =["red","blue","green","yellow"];


function startOver(){
level=0;
gamePattern=[];
started=false;
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },2000);
    $("h1").text("Game Over, Press any key to restart");
    playSound("wrong");
    console.log("wrong");
    startOver();
  }

}





var level = 0;
var started = false;
$(document).keypress(function() {
  if (!started) {

    
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //when we want to check the latest button the user clicked, its index is:
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence(){
    userClickedPattern = [];
   level++;
     $("#level-title").text("Level " + level);

     var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);
}
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
//   playSound(name) takes a parameter (name), which can be any color.

// Both nextSequence() and the .click() function call it by passing the color name.

// Now, playSound() doesn’t depend on variables outside of it — it works anywhere
}


function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}



