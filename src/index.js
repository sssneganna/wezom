import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/main.scss";
import "./styles/navbar.scss";
import "./styles/searchbar.scss";
import "./styles/accordion.scss";
import "./styles/reviews.scss";
import "./styles/buyField.scss";
import "./styles/phoneField.scss";
import "./styles/productList.scss";
import "./styles/slider.scss";
import "./styles/characteristic.scss";
import "./styles/basketBox.scss";
import "./styles/headerTopMenu.scss";
import "./styles/sprite.scss";
import { createNavigationItem } from "./scripts/Main/createNavigationItem";
import { createProductItem } from "./scripts/Main/createProductItem.js";
import { createReviews } from "./scripts/Main/CreateReviews.js";

const nav = document.querySelector("#nav");
createNavigationItem(nav);

const form = document.querySelector(".form-search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});

const formPhone = document.querySelector(".phone-field__form");
formPhone.addEventListener("submit", (e) => {
  e.preventDefault();
  formPhone.reset();
});

const productList = document.querySelector(".product__list");
createProductItem(productList);

const rew = document.querySelector("#reviews");
createReviews(rew);
