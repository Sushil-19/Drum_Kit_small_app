
for (var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelector("button")[i].addEventListener("click", function(){
        var audio = new Audio("/sounds/tom-1.mp3");
        audio.play();
    });

}

