var num_button = document.querySelectorAll(".drum").length; 

for (let i = 0; i < num_button; i++) { // run extrememly fast to add listener to all the buttons
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            
            var buttonClicked = this; // first step is store the this button
            buttonClicked.style.color = "white"; // the button

            // settime out and replace the querySelector with this
            setTimeout(function () {
                alert(this);
                buttonClicked.style.color = "red";
            }, 200) // wait for 200 miliseconds, then transform back to red

            var buttonName = buttonClicked.textContent;
            switch (buttonName) { // swith with the target + {} + case name + : + implement; + break; + default + : + implement;
                case "w":
                    var crash_audio = new Audio("./sounds/crash.mp3");
                    crash_audio.play();
                    break;

                case "a":
                    var kick_audio = new Audio("./sounds/kick.mp3");
                    kick_audio.play();
                    break;

                case "s":
                    var snare_audio = new Audio("./sounds/snare.mp3");
                    snare_audio.play();
                    break;

                case "d":
                    var tom_1_audio = new Audio("./sounds/tom-1.mp3");
                    tom_1_audio.play();
                    break;

                case "j":
                    var tom_2_audio = new Audio("./sounds/tom-2.mp3");
                    tom_2_audio.play();
                    break;

                case "k":
                    var tom_3_audio = new Audio("./sounds/tom-3.mp3");
                    tom_3_audio.play();
                    break;

                case "l":
                    var tom_4_audio = new Audio("./sounds/tom-4.mp3");
                    tom_4_audio.play();
                    break;
                default: console.log(this);

            }
        } // function
        );// addEventListener
} // for loop


