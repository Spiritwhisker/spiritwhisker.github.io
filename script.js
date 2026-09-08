const actionButton = document.querySelector("#actionButton");
const message = document.querySelector("#message");

// Replace this with the action your app needs.
actionButton.addEventListener("click", () => {
  message.textContent = "Great! Now enter your nonexistent username:";
});
