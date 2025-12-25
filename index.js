
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { // run extrememly fast to add listener to all the buttons
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var buttonName = document.querySelectorAll(".drum")[i].textContent;
            switch (buttonName) {
                case "w":
                    var crash_audio = new Audio("./sounds/crash.mp3");
                    crash_audio.play();
                case "a":
                    var kick_audio = new Audio("./sounds/kick.mp3");
                    kick_audio.play();
                case "s":
                    var snare_audio = new Audio("./sounds/snare.mp3");
                    snare_audio.play();
                case "d":
                    var tom_1_audio = new Audio("./sounds/tom-1.mp3");
                    tom_1_audio.play();
                case "j":
                    var tom_2_audio = new Audio("./sounds/tom-2.mp3");
                    tom_2_audio.play();
                case "k":
                    var tom_3_audio = new Audio("./sounds/tom-3.mp3");
                    tom_3_audio.play();
                case "l":
                    var tom_4_audio = new Audio("./sounds/tom-4.mp3");
                    tom_4_audio.play();

            }
        } // function
        ); // addEventListener
    
    
} // for loop

