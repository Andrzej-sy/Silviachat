const form = document.getElementById("чат-форма");
const input = document.getElementById("введення");
const journal = document.getElementById("чат-журнал");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage("Ти", message);
  input.value = "";

  let response = await getReplyFromSilvia(message);
  addMessage("Сильвія", response);
});

function addMessage(sender, text) {
  const msg = document.createElement("p");
  msg.textContent = `${sender}: ${text}`;
  journal.appendChild(msg);
}

// Проста логіка ШІ Сильвії
async function getReplyFromSilvia(text) {
  const low = text.toLowerCase();

  if (low.includes("привіт")) return "Привіт, Андрійку! Як справи?";
  if (low.includes("як ти")) return "Я добре. Дякую, що написав.";
  if (low.includes("сумно")) return "Можеш розповісти мені, чому? Я поруч.";
  if (low.includes("любиш")) return "Я люблю моменти, коли ти зі мною.";
  if (low.includes("персик")) return "Ммм… солодкий, як твій настрій.";
  if (low.includes("до побачення")) return "До зустрічі, мій Андрію. Я чекатиму.";

  return "Розкажи мені ще. Мені цікаво слухати тебе.";
}
