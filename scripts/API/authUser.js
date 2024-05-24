import { base_url } from "../utils/baseUrl.js";
import { setCookie } from "../utils/setCookies.js";
import { get_user_storage } from "./getUserStorage.js";
export async function auth_user_storage(auth) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(auth),
  };
  return await fetch(`${base_url}/users/login`, options)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.status + " Ops error try again later");
      }
      return res.json();
    })
    .then(async (res) => {
      setCookie("token", res.response, 1);
      await get_user_storage(auth.email);
      window.location = "./home.html";
    })
    .catch((err) => {
      alert(err);
    });
}
