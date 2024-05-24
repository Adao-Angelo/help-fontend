import { getCookie } from "../utils/getCookies.js";

const user_name = document.querySelector(".user_name");
const user_email = document.querySelector(".user_email");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const BI = document.querySelector("#BI");
function getDataUser() {
  const userData = JSON.parse(getCookie("user_data"));
  user_name.innerHTML = userData.response.nome;
  user_email.innerHTML = userData.response.email;
  name.value = userData.response.nome;
  phone.value = userData.response.telefone;
  city.value = userData.response.municipio;
  country.value = userData.response.provincia;
  BI.value = userData.response.bi;
}

getDataUser();
