let numberInputElement;
let bodyE;

function numberConditions() {
    numberInputElement = document.getElementById("numberInput");
    numberInputElement.innerHTML = "";
    let numberInputElementValue = numberInputElement.value;
    const randomNumValue = Math.floor(Math.random() * 100);

    if (numberInputElementValue === "") {
        alert("Please enter a number");
    } else if (100 < numberInputElementValue  || numberInputElementValue < 0) {
        alert("Please enter a number between 0-100")      
    } else if (numberInputElementValue !== "" && 100 >= numberInputElementValue >= 0) {
        let randomAns = document.createElement("p");
        let anstext = document.createTextNode("Your number is " + numberInputElementValue + " correct Number is " + randomNumValue);
        let ansArry = [];

        ansArry.push(anstext);
        randomAns.appendChild(ansArry[0]);
        bodyE = document.getElementById("randomeNumberElement");
        bodyE.appendChild(randomAns);

        console.log(ansArry);      
    }
    

    if (numberInputElementValue > randomNumValue && numberInputElementValue !== "" && 100 >= numberInputElementValue && numberInputElementValue >= 0) {
        alert("Number less than");
        console.log(randomNumValue);
    } else if (numberInputElementValue < randomNumValue && numberInputElementValue !== "" && 100 >= numberInputElementValue && numberInputElementValue >= 0) {
        alert("Number greater than");
        console.log(randomNumValue);
    }  else if (numberInputElementValue === randomNumValue && numberInputElementValue !== "" && 100 >= numberInputElementValue && numberInputElementValue >= 0) {
        alert("Number equal");
        console.log(randomNumValue);
    }

}

function loadHandler() {
    const submitInputElement = document.getElementById("submitBtn");
    submitInputElement.addEventListener("click", numberConditions);

    const resetBtnElement = document.getElementById("resetbtn");
    resetBtnElement.addEventListener("click", function () {
        let formElement = document.getElementById("formContainer");
        formElement.reset();

        bodyE.innerHTML = "";
    })
}


window.addEventListener("load", loadHandler);