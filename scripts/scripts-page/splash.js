window.onload = function () {
  const h1 = document.querySelector("h1");
  const text = h1.textContent;
  h1.textContent = "";

  let i = 0;
  const typingInterval = setInterval(function () {
    h1.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
      h1.classList.add("typing-cursor");
    }
  }, 400);
};

const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  window.location = "./Onboarding.html";
});
