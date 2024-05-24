import { getCookie } from "../utils/getCookies.js";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const menu = document.querySelector(".menu");

/*_____function open and close menu ____*/
function openAndCloseMenu() {
  menu.classList.toggle("on");
}
openMenu.addEventListener("click", openAndCloseMenu);
closeMenu.addEventListener("click", openAndCloseMenu);

/*_____function  show data user modal ____*/

const user_name = document.querySelector(".user_name");
const user_email = document.querySelector(".user_email");

function getDataUser() {
  const userData = JSON.parse(getCookie("user_data"));
  user_name.innerHTML = userData.response.nome;
  user_email.innerHTML = userData.response.email;
}

getDataUser();
