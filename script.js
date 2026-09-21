const startHere = document.querySelector("#startHere");
const aboutUsButton = document.querySelector("#theWeirdAndWorryingAboutUsButton");
const dailyScore = document.querySelector("#dailyScore");
const dailyQualityText = document.querySelector("#dailyQualityText")
const testAddTen = document.querySelector("#testAddTen")

const style = document.createElement("style");
style.textContent = `
  body { margin: 1rem; }
  button { position: relative; overflow: hidden; background-image: none !important; }
  button::after {
    content: "";
    position: absolute;
    inset: 50%;
    width: 1rem;
    height: 1rem;
    border: 2px solid currentColor;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: none;
  }
  button.ripple::after { animation: button-ripple 0.45s ease-out; }
  @keyframes button-ripple {
    from { opacity: 0.45; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -50%) scale(12); }
  }
`;
document.head.appendChild(style);

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("ripple");
    void button.offsetWidth;
    button.classList.add("ripple");
  });
});

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
  if (dailyScore) {
    dailyScore.textContent = String(dayScore);
  }
})