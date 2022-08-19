let randomNumValue = Math.floor(Math.random() * 100);
let guessTries = 1;
let numberInputElementValue = document.getElementById("numberInput");


function numberConditions() {
    numberInputElementValue = document.getElementById("numberInput").value;

    if (numberInputElementValue == randomNumValue) {
        wonGame();
    } else if (guessTries === 5) {
        lostGame();
    } else {
        if (numberInputElementValue > randomNumValue) {
            alert("WRONG GUESS!! TRY A SMALLER NUMBER");
            addAtemptToList();
            console.log(randomNumValue);
            console.log(guessTries);
        } else if (numberInputElementValue < randomNumValue) {
            alert("WRONG GUESS!! TRY A GREATER NUMBER");
            addAtemptToList();
            console.log(randomNumValue);
            console.log(guessTries);
        } 
    }

    guessTries++;
}

function lostGame() {
    alert("GAME OVER!! THE CORRECT ANSWER IS " + randomNumValue);
    
    resetGame();
}

function wonGame() {
    alert("YOU GUESSED IT RIGHT!! YOU NEEDED " + guessTries + "GUESS");
    console.log(randomNumValue);
    console.log(guessTries);

    resetGame();
}

function resetGame() {
    guessTries = 1;
    randomNumValue = Math.floor(Math.random() * 100);

    let formElement = document.getElementById("formContainer");
    formElement.reset();
}

function addAtemptToList() {
    const atemptList = document.createElement("li");
    const atemptListElements = document.createElement("p");
    const atemptListContainer = document.getElementById("randomeNumberElement");

    if (randomNumValue != numberInputElementValue.value) {
        atemptListElements.innerText = numberInputElementValue.value;
        atemptList.appendChild(atemptListElements);

        atemptListContainer.appendChild(atemptList);

    }
} 


function loadHandler() {
    const submitInputElement = document.getElementById("submitBtn");
    submitInputElement.addEventListener("click", numberConditions);

    const resetBtnElement = document.getElementById("resetbtn");
    resetBtnElement.addEventListener("click", resetGame)
}


window.addEventListener("load", loadHandler);