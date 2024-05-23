import { base_url } from "../utils/baseUrl.js";
import { setCookie } from "../utils/setCookies.js";
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
    .then((res) => {
      setCookie("token", res.response, 1);
      window.location = "./home.html";
    })
    .catch((err) => console.error(err));
}
