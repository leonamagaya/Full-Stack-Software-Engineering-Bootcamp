var gamePattern = [];
var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var level = 0;
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click( function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
 })


//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {

  $("h1").html("Level " + level);
  level++;

  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomChosenColour);
} 

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100);
}




