const form = document.getElementById("чат-форма");
const input = document.getElementById("введення");
const journal = document.getElementById("чат-журнал");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage("Ти", message);
  input.value = "";

  // Простий бот-відповідь
  let response = "Цікаво! Розкажи ще.";
  if (message.toLowerCase().includes("привіт")) {
    response = "Привіт, Андрійку!";
  } else if (message.toLowerCase().includes("як справи")) {
    response = "У мене все добре. А в тебе?";
  }

  setTimeout(() => addMessage("Сильвія", response), 500);
});

function addMessage(author, text) {
  const messageElement = document.createElement("p");
  messageElement.innerHTML
