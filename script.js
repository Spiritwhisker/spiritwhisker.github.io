const startHere = document.querySelector("#startHere");
const aboutUsButton = document.querySelector("#theWeirdAndWorryingAboutUsButton");
const dailyScore = document.querySelector("#dailyScore");
const dailyQualityText = document.querySelector("#dailyQualityText")
const testAddTen = document.querySelector("#testAddTen")

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

let dayQualityText = "Null (No Data, sorry &#x2639;&#xFE0F;)";
if (dailyScore > 75) {
  dayQualityText = "Good Job Today!"
}
//Meow


testAddTen?.addEventListener("click", () => {
  dayScore += 10;
})