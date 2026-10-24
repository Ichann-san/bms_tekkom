const button = document.getElementById("changeButton");
const message = document.getElementById("message");
const beginMessage = message.textContent;

button.addEventListener("click", function () {
    if (message.textContent !== "Kopdes") {
        message.textContent = "Kopdes";
    } else {
        message.textContent = beginMessage;
    }
});
