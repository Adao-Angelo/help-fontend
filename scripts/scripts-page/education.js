import { people } from "../base/people.js";
/*__________SEARCH - LOGIC ___________ */
const searchBox = document.querySelector(".search-box");
const searchResult = document.querySelector(".search-result");
const selectedName = document.querySelector(".selected-name");

searchBox.addEventListener("input", function () {
  if (searchBox.value != "") {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredPeople = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    searchResult.innerHTML = "";
    filteredPeople.forEach((person) => {
      const listItem = document.createElement("li");
      listItem.textContent = person;
      listItem.addEventListener("click", function () {
        selectedName.textContent = person;
      });
      searchResult.appendChild(listItem);
    });
  } else {
    searchResult.innerHTML = "";
  }
});
