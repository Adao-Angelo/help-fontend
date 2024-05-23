import { post_user_storage } from "../API/postUserStorage.js";
window.onload = function () {
  const h1 = document.querySelector("h1");
  const text = h1.textContent;
  h1.textContent = "";

  let i = 0;
  const typingInterval = setInterval(function () {
    h1.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
      h1.classList.add("typing-cursor");
    }
  }, 200);
};

const bi = document.querySelector("#bi");
const email = document.querySelector("#email");
const county = document.querySelector("#county");
const name = document.querySelector("#name");
const province = document.querySelector("#province");
const password = document.querySelector("#password");
const surname = document.querySelector("#surname");
const phone = document.querySelector("#phone");

const from = document.querySelector("#sign-up");

from.addEventListener("submit", function (e) {
  e.preventDefault();
  create_user_account();
});

async function create_user_account() {
  const user = {
    bi: bi.value,
    email: email.value,
    municipio: county.value,
    nome: name.value,
    provincia: province.value,
    senha: password.value,
    sobrenome: surname.value,
    telefone: phone.value,
  };
  await post_user_storage(user);
}
