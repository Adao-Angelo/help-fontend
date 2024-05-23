import { base_url } from "../utils/baseUrl.js";
export async function post_user_storage(user) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  return await fetch(`${base_url}/users`, options)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.status + " Ops error try again later");
      }
      return res.json();
    })
    .then((res) => {
      console.log(res);
      window.location = "./signIn.html";
    })
    .catch((err) => console.error(err));
}
