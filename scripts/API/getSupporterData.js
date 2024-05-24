import { base_url } from "../utils/baseUrl.js";
import { setCookie } from "../utils/setCookies.js";
export async function get_supporter(email) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${base_url}/apoiador?email=${email}`, options)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.status + " Ops error try again later");
      }
      return res.json();
    })
    .then((res) => {
      setCookie("supporter_data", JSON.stringify(res), 1);
    })
    .catch((err) => {
      alert(err);
    });
}
