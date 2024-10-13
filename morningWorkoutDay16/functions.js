export default function display() {
  if (i < conversation.length && i % 2 == 1) {
    let message = conversation[i];
    let chat = document.createElement("div");
    chat.classList.add("message--remote");
    chat.classList.add("message");
    convo.appendChild(chat);
    let bubble = document.createElement("div");
    bubble.classList.add("message__text");
    bubble.innerHTML += `${message.text}`;
    chat.appendChild(bubble);
    i++;
  } else if ((i < conversation.length && i % 2 == 0) || i === 0) {
    let message = conversation[i];
    let chat = document.createElement("div");
    chat.classList.add("message--local");
    chat.classList.add("message");
    convo.appendChild(chat);
    let bubble = document.createElement("div");
    bubble.classList.add("message__text");
    bubble.innerHTML += `${message.text}`;
    chat.appendChild(bubble);
    i++;
  }
}
