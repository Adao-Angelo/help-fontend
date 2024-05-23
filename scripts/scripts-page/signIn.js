import { auth_user_storage } from "../API/authUser.js";

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
/*_____________ SIGN IN _______________________ */
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const from = document.querySelector("#sign-in");

from.addEventListener("submit", function (e) {
  e.preventDefault();
  auth_user_account();
});

async function auth_user_account() {
  const auth = {
    email: email.value,
    senha: password.value,
  };

  await auth_user_storage(auth);
}
