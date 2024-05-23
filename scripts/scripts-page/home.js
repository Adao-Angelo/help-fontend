const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

/*_____function open and close menu ____*/
function openAndCloseMenu() {
  menu.classList.toggle("on");
}
openMenu.addEventListener("click", openAndCloseMenu);
closeMenu.addEventListener("click", openAndCloseMenu);
