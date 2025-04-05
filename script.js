const form = document.getElementById("чат-форма");
const input = document.getElementById("введення");
const journal = document.getElementById("чат-журнал");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage("Ти", message);
  input.value = "";

  let response = "Ммм... цікаво. Розкажи ще!";
  addMessage("Сільвія", response);
});

function addMessage(sender, text) {
  const messageEl = document.createElement("p");
  messageEl.innerHTML = `<strong>${sender}:</strong> ${text}`;
  journal.appendChild(messageEl);
  journal.scrollTop = journal.scrollHeight;
}
