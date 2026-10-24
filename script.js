const button = document.getElementById("changeButton");
const message = document.getElementById("text1");
const beginMessage = message.textContent;

button.addEventListener("click", function () {
    message.textContent = "Jangan lupa daftar schematics tahun 2027";
});

// button.addEventListener("click", function () {
//     if (message.textContent !== "Kopdes") {
//         message.textContent = "Kopdes";
//     } else {
//         message.textContent = beginMessage;
//     }
// });
