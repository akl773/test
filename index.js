// code which detect mouse click on the button.

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        let buttonInnerHTML = this.innerHTML;
        console.log("mai aaya hu yayahahahha")
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function to make sound

function makeSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play().then(r => console.log(r));
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play().then(r => console.log(r));
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play().then(r => console.log(r));
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play().then(r => console.log(r));
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play().then(r => console.log(r));
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play().then(r => console.log(r));
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play().then(r => console.log(r));
            break;

        default:
            alert("Please press any one of the alphabets display on the screen.");

    }
}

function buttonAnimation(currentKey) {
    let buttonAction = document.querySelector("." + currentKey);
    buttonAction.classList.add("pressed");

    setTimeout(function () {
        buttonAction.classList.remove("pressed");
    }, 100);
}
