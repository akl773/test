// code which detect mouse click on the button.

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        let buttonInnerHTML = event.target.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function to make sound

function makeSound() {
    let sound = new Audio("sound/tom.mp3");
    sound.play().then(r => console.log(r));
}

function buttonAnimation(currentKey) {
    let buttonAction = document.querySelector("." + currentKey);
    buttonAction.classList.add("pressed");

    setTimeout(function () {
        buttonAction.classList.remove("pressed");
    }, 100);
}
