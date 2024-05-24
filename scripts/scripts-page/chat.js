import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
const socket = io("http://192.168.230.199:5000");
const stop_voice = document.querySelector(".stop-voice");
const synth = window.speechSynthesis;

const newMessage = document.createElement("div");
document
  .getElementById("message-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      socket.emit("send", {
        text: messageText,
        user: "I",
      });

      // Clear the input
      messageInput.value = "";
      messageInput.focus();
    }
  });

socket.on("received", (message) => {
  if (message.user === "I") {
    const messagesContainer = document.getElementById("messages-container");

    const newMessage = document.createElement("div");

    newMessage.classList.add("message", "sent");
    newMessage.textContent = message.text;
    messagesContainer.appendChild(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    const messagesContainer = document.getElementById("messages-container");
    const newMessage = document.createElement("div");
    const modifiedText = message.text
      .replace(/\*/g, "<p>")
      .replace(/\*{2}/g, "");

    newMessage.classList.add("message", "received");

    newMessage.innerHTML = modifiedText;
    messagesContainer.appendChild(newMessage);

    const utterThis = new SpeechSynthesisUtterance(
      message.text.replace(/\*/g, "  ").replace(/\*{2}/g, "")
    );

    utterThis.lang = "pt-BR";
    utterThis.pitch = 1;
    utterThis.rate = 1;

    synth.speak(utterThis);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});
stop_voice.addEventListener("click", () => {
  synth.cancel();
});
// socket.on("loading", () => {
//   const messagesContainer = document.getElementById("messages-container");

//   newMessage.classList.add("message", "received");
//   newMessage.innerHTML = "<i class= 'fas fa-spinner'><i/>";
//   messagesContainer.appendChild(newMessage);
// });
