// Global ripple effect for all buttons
const style = document.createElement("style");
style.textContent = `
  button { position: relative; overflow: hidden; background-image: none !important;}
  button::after { content: ""; position: absolute; inset: 50%; width: 1rem; height: 1rem; border: 2px solid currentColor; border-radius: 50%; opacity: 0; transform: translate(-50%, -50%) scale(1);}
  button.ripple::after { animation: button-ripple .45s ease-out;}
  @keyframes button-ripple { from { opacity: .45; transform: translate(-50%, -50%) scale(1);} to { opacity: 0; transform: translate(-50%, -50%) scale(12);}}
`;

document.head.appendChild(style);

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("ripple");
    void button.offsetWidth;
    button.classList.add("ripple");
  });
});
