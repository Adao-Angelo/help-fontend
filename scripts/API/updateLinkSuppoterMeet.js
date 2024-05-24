import { base_url } from "../utils/baseUrl.js";

export async function update_Link_meet(link) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(link),
  };
  return await fetch(`${base_url}/link-meet?email=${email} `, options)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.status + " Ops error try again later");
      }
      return res.json();
    })
    .then((res) => {
      console.log(res);
      //setCookie("token", res.response, 1);
      //window.location = "./home.html";
    })
    .catch((err) => {
      alert(err);
    });
}
