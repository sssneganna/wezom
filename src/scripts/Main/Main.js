import { createReviewsField } from "./CreateReviews.js";
import { createBuyField } from "./createBuyField.js";
import { createAccordion } from "./createAccordion.js";
import { createProductList } from "./createProductList.js";
import { createFieldForm } from "./createPhoneForm.js";
import { createSliderContainer } from "./createSlider.js";
import { createCharacteristicSection } from "./createCharacteristicSection.js";

export const createMain = (root) => {
  const mainContent = document.createElement("div");
  root.append(mainContent);
  mainContent.classList.add("main-page");
  const flex = document.createElement("div");
  mainContent.append(flex);
  flex.classList.add("main-section");
  const pageLeft = document.createElement("div");
  flex.append(pageLeft);
  pageLeft.classList.add("main-section_left");
  createSliderContainer(pageLeft);
  createCharacteristicSection(pageLeft);
  const pageRight = document.createElement("div");
  flex.append(pageRight);
  pageRight.classList.add("main-section_right");

  createBuyField(pageRight);
  createAccordion(pageRight);
  createReviewsField(pageRight);

  createProductList(mainContent);
  createFieldForm(mainContent);
};
