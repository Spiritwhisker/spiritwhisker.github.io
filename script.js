const startHere = document.querySelector("#startHere");
const message = document.querySelector("#message");

document.getElementById("startHere").addEventListener("click", function() {
    window.location.href = "homepage.html";
});

document.getElementById("theWeirdAndWorryingAboutUsButton").addEventListener("click", function() {
    window.location.href = "aboutUs.html";
});