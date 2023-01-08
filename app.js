var inputText = document.querySelector(".inputTxt");
var translateBtn = document.querySelector("#button");
var outputText = document.querySelector("#outputTxt");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("OOPS! server error. Please try again later");
}

function clickHandler() {
    var inputtxt = inputText.value;
    fetch(getTranslatedURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            Translatedtxt = json.contents.translated;
            outputText.innerText = Translatedtxt;
        })
        .catch(errorHandler)
    }
    translateBtn.addEventListener("click", clickHandler)
