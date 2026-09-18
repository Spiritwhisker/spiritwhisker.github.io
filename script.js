const startHere = document.querySelector("#startHere");
const aboutUsButton = document.querySelector("#theWeirdAndWorryingAboutUsButton");
const dailyScore = document.querySelector("#dailyScore");

// Each page has different elements, so only attach a listener when the element exists.
startHere?.addEventListener("click", () => {
  window.location.href = "homepage.html";
});

aboutUsButton?.addEventListener("click", () => {
  window.location.href = "aboutUs.html";
});

const dayScore = 50;
if (dailyScore) {
  dailyScore.textContent = String(dayScore);
}
