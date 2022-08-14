function numberConditions() {
    const numberInputElement = document.getElementById("numberInput");
    let numberInputElementValue = numberInputElement.value;
    const randomNumValue = Math.floor(Math.random() * 100);

    if (numberInputElementValue === "") {
        alert("Please enter a number");
    } else if (numberInputElementValue !== "") {
        let randomAns = document.createElement("p");
        let anstext = document.createTextNode("Correct Number is " + randomNumValue);
        randomAns.appendChild(anstext);
        const bodyE = document.getElementById("randomeNumberElement");
        bodyE.appendChild(randomAns);
    }
    

    if (numberInputElementValue > randomNumValue) {
        alert("Number less than");
        console.log(randomNumValue);
    } else if (numberInputElementValue < randomNumValue) {
        alert("Number greater than");
        console.log(randomNumValue);
    }  else if (numberInputElementValue === randomNumValue) {
        alert("Number equal");
        console.log(randomNumValue);
    }

}

function loadHandler() {
    const submitInputElement = document.getElementById("submitBtn");
    submitInputElement.addEventListener("click", numberConditions);
}


window.addEventListener("load", loadHandler);