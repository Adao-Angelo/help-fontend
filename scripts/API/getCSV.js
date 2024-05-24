import { base_url } from "../utils/baseUrl.js";
import { setCookie } from "../utils/setCookies.js";
export async function get_csv_supporter(email) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${base_url}/get-csv?email=${email} `, options)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.status + " Ops error try again later");
      }
      return res.json();
    })
    .then((res) => {
      console.log(res);
      //setCookie("token", res.response, 1);
      // window.location = "./home.html";
    })
    .catch((err) => {
      alert(err);
    });
}
