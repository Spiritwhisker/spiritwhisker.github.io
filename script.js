const startHere = document.querySelector("#startHere");
const aboutUsButton = document.querySelector("#theWeirdAndWorryingAboutUsButton");
const dailyScore = document.querySelector("#dailyScore");


startHere?.addEventListener("click", () => {
  window.location.href = "homepage.html";
});

aboutUsButton?.addEventListener("click", () => {
  window.location.href = "aboutUs.html";
});

let dayScore = 50;
if (dailyScore) {
  dailyScore.textContent = String(dayScore);
}
//Thanks, AI!