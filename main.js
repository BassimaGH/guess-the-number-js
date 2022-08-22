let randomNumValue = Math.floor(Math.random() * 100);
let guessTries = 1;
let numberInputElementValue = document.getElementById("numberInput");

const atemptList = document.createElement("li");

function numberConditions() {
    numberInputElementValue = document.getElementById("numberInput").value;

    if (numberInputElementValue == randomNumValue) {
        wonGame();
        addAtemptToList();
    } else if (guessTries === 5) {
        lostGame();
        addAtemptToList();
    } else if (numberInputElementValue > 100 || numberInputElementValue < 1) {
        setLimit();
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
    
    document.getElementById("numberInput").disabled = true;
    document.getElementById("submitBtn").disabled = true;
}

function wonGame() {
    alert("YOU GUESSED IT RIGHT!! YOU NEEDED " + guessTries + " GUESS");
    console.log(randomNumValue);
    console.log(guessTries);

    document.getElementById("numberInput").disabled = true;
    document.getElementById("submitBtn").disabled = true;    
}

function resetGame() {
    guessTries = 1;
    randomNumValue = Math.floor(Math.random() * 100);

    let formElement = document.getElementById("formContainer");
    formElement.reset();

    document.getElementById("numberInput").disabled = false;
    document.getElementById("submitBtn").disabled = false;
    
    atemptList.innerText = "";
}

function addAtemptToList() {
    const atemptListElements = document.createElement("p");
    const atemptListContainer = document.getElementById("randomeNumberElement");
    numberInputElementValue = document.getElementById("numberInput").value;

    if (randomNumValue != numberInputElementValue) {
        if (numberInputElementValue > randomNumValue) {
            atemptListElements.innerText = numberInputElementValue + " (Too high)";
        } else if (numberInputElementValue < randomNumValue) {
            atemptListElements.innerText = numberInputElementValue + " (Too low)";
        }
        atemptList.appendChild(atemptListElements);

        atemptListContainer.appendChild(atemptList);
    } else if (numberInputElementValue == randomNumValue) {
        atemptListElements.innerText = numberInputElementValue + " (Correct number)";
        atemptList.appendChild(atemptListElements);

        atemptListContainer.appendChild(atemptList);
    }
} 

function setLimit() {
    alert("ENTER A NUMBER BETWEEN 1-100");
    guessTries = guessTries - 1;
}

function loadHandler() {
    const submitInputElement = document.getElementById("submitBtn");
    submitInputElement.addEventListener("click", numberConditions);

    const resetBtnElement = document.getElementById("resetbtn");
    resetBtnElement.addEventListener("click", resetGame)
}


window.addEventListener("load", loadHandler);