const open_donate_modal = document.querySelector(".open-donate-modal");
const donate_modal = document.querySelector(".donate-modal");
const close_modal = document.querySelector(".close-modal");
/* ___________ Donate - Modal - Controller _________- */

function closeAndOpenDonateModal() {
  donate_modal.classList.toggle("on");
}

open_donate_modal.addEventListener("click", closeAndOpenDonateModal);
close_modal.addEventListener("click", closeAndOpenDonateModal);
