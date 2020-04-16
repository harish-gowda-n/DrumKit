//document.querySelector("button").addEventListener("click", handleClick);
for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimations(this.innerHTML);
  });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimations(event.key);
});
function makeSound(key){
  var audio;
  switch (key) {
    case 'w':
      audio = new Audio("sounds/crashh.mp3");
      break;
    case 'a':
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case 's':
      audio = new Audio("sounds/snare.mp3");
      break;
    case 'd':
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'j':
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case 'k':
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'l':
      audio = new Audio("sounds/tom-4.mp3");
      break;
  }
  audio.play();
}
function buttonAnimations(pressedkey){
  document.querySelector("."+ pressedkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ pressedkey).classList.remove("pressed");
  }, 100);
}
