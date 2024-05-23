import { onboarding_data } from "../base/onboarding_data.js";

const content_slide = document.querySelector(".content-slide");

const title_slide = document.querySelector(".title-slide");
const next_slide_btn = document.querySelector(".next-slide-btn");
const slide02 = document.querySelector(".slide-02");
const slide03 = document.querySelector(".slide-03");
const next_button = document.querySelector(".next-button");
let position = 0;

function Onboarding() {
  const onboardingData = onboarding_data;

  position += 1;
  if (position == 1) {
    title_slide.innerHTML = onboardingData.slide_title_texts[position];
    slide02.classList.add("on");
    content_slide.innerHTML = onboardingData.slide_image_tags[position];
  }

  if (position == 2) {
    title_slide.innerHTML = onboardingData.slide_title_texts[position];
    next_slide_btn.innerHTML =
      onboardingData.slide_btns_controllers_tags[position];
    slide03.classList.add("on");
    content_slide.innerHTML = onboardingData.slide_image_tags[position];
  }
}
next_button.addEventListener("click", Onboarding);
