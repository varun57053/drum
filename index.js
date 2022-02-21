  numberofdrumbuttons = document.querySelectorAll(".drum").length;
  for(var i=0; i<numberofdrumbuttons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , handclick);
 function handclick(){
this.style.color = "blue";
   var buttonInnerHtml = this.innerHTML;
   makesound(buttonInnerHtml);

ButtonAnimationkey(buttonInnerHtml);

}
  }

document.addEventListener("keydown" , presskey);
function presskey(Event)
{
   
   makesound(Event.key);
  ButtonAnimationkey(Event.key);

}  


function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
           audio.play();
           break;
    
           case "s" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
          break;
    
            case "d" :
                var audio = new Audio("sounds/tom-4.mp3");
    
           audio.play();
       break;
    
           case "j":
            var audio = new Audio("sounds/tom-3.mp3");
    
            audio.play();
            break;
            case "k":
                var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
     break;
           case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        default:
            alert("you pressed wrong key");
    }
    
    }
function ButtonAnimationkey(currentKey){


var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");


setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);

}
 

 
