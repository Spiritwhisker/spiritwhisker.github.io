const startHere = document.querySelector("#startHere");
const aboutUsButton = document.querySelector("#theWeirdAndWorryingAboutUsButton");
const dailyScore = document.querySelector("#dailyScore");
const dailyQualityText = document.querySelector("#dailyQualityText");
const testAddTen = document.querySelector("#testAddTen");
const startTimer = document.querySelector("#startTimer");

const SCORE_KEY = "dailyScore";
const DEFAULT_SCORE = 50;

function clampScore(score) {
  return Math.min(100, Math.max(0, score));
}

function getDailyScore() {
  const savedScore = Number.parseInt(localStorage.getItem(SCORE_KEY), 10);
  return Number.isFinite(savedScore) ? clampScore(savedScore) : DEFAULT_SCORE;
}

function qualityLabel(score) {
  if (score >= 76) return "Great work today!";
  if (score >= 51) return "You’re making progress.";
  if (score >= 26) return "Keep going — one session at a time.";
  return "A fresh start is always available.";
}

function renderDailyScore() {
  const score = getDailyScore();
  if (dailyScore) dailyScore.textContent = String(score);
  if (dailyQualityText) dailyQualityText.textContent = qualityLabel(score);
  return score;
}

function updateDailyScore(change) {
  const nextScore = clampScore(getDailyScore() + Number(change || 0));
  localStorage.setItem(SCORE_KEY, String(nextScore));
  renderDailyScore();
  return nextScore;
}

const style = document.createElement("style");
style.textContent = `
  button { position: relative; overflow: hidden; background-image: none !important; }
  button::after { content: ""; position: absolute; inset: 50%; width: 1rem; height: 1rem; border: 2px solid currentColor; border-radius: 50%; opacity: 0; transform: translate(-50%, -50%) scale(1); pointer-events: none; }
  button.ripple::after { animation: button-ripple .45s ease-out; }
  @keyframes button-ripple { from { opacity: .45; transform: translate(-50%, -50%) scale(1); } to { opacity: 0; transform: translate(-50%, -50%) scale(12); } }
`;
document.head.appendChild(style);

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("ripple");
    void button.offsetWidth;
    button.classList.add("ripple");
  });
});

startHere?.addEventListener("click", () => { window.location.href = "homepage.html"; });
aboutUsButton?.addEventListener("click", () => { window.location.href = "aboutUs.html"; });
startTimer?.addEventListener("click", () => { window.location.href = "workTimer.html"; });
testAddTen?.addEventListener("click", () => { updateDailyScore(10); });

renderDailyScore();
